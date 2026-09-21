import { createOpenAI } from "@ai-sdk/openai";
import { createServerFn } from "@tanstack/react-start";
import { NoObjectGeneratedError, Output, streamText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayRunIdFetch } from "@/lib/ai-gateway.server";
import { portfolioContext } from "@/data/portfolio";

const inputSchema = z.object({ roleDescription: z.string().trim().min(40).max(8000) });
const matchSchema = z.object({
  matchSummary: z.string(),
  strongestMatches: z.array(z.object({ area: z.string(), evidence: z.string() })),
  relevantProject: z.object({ name: z.string(), relevance: z.string() }),
  gapsToDiscuss: z.array(z.string()),
  interviewTopics: z.array(z.string()),
});

export type RecruiterMatch = z.infer<typeof matchSchema>;

function safeMessage(error: unknown) {
  if (error instanceof Error) {
    const statusMatch = error.message.match(/\b(400|401|402|403|404|429|5\d\d)\b/);
    if (statusMatch?.[1] === "402") return "AI credits are unavailable. Please add workspace credits and try again.";
    if (statusMatch?.[1] === "429") return "The AI service is busy. Please wait a moment and try again.";
    if (statusMatch?.[1] === "401") return "The AI service is not configured correctly.";
    if (statusMatch?.[1] === "403") return "This AI request is not currently permitted for the workspace.";
    if (statusMatch?.[1]?.startsWith("5")) return "The AI service is temporarily unavailable. Please try again later.";
    return error.message.slice(0, 240);
  }
  return "The role match could not be completed.";
}

export const matchRecruiterRole = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env['LOVABLE_API_KEY'];
    if (!key) return { ok: false as const, error: "The AI service is not configured correctly." };
    try {
      const runIdFetch = createLovableAiGatewayRunIdFetch();
      const lovable = createOpenAI({
        baseURL: "https://ai.gateway.lovable.dev/v1",
        apiKey: key,
        headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
        fetch: runIdFetch.fetch,
      });
      const result = streamText({
        model: lovable.responses("openai/gpt-6-astra"),
        output: Output.object({ schema: matchSchema }),
        system: "You are a precise portfolio-to-role matching assistant. Use only the supplied portfolio facts. Never invent experience, qualifications, metrics, tools, or suitability. State gaps candidly. Keep every field concise and recruiter-friendly.",
        prompt: `Compare this open role with the verified portfolio. Return grounded recommendations only.\n\nOPEN ROLE:\n${data.roleDescription}\n\nVERIFIED PORTFOLIO:\n${portfolioContext}`,
        providerOptions: { openai: { forceReasoning: true, reasoningEffort: "medium", reasoningSummary: "auto", store: false, include: ["reasoning.encrypted_content"] } },
      });
      const output = await result.output;
      return { ok: true as const, data: output };
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) return { ok: false as const, error: "The AI response could not be structured. Please try again." };
      return { ok: false as const, error: safeMessage(error) };
    }
  });

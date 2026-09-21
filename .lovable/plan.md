# Interactive Security Portfolio Expansion

## Goal
Transform the portfolio into a more immersive security-focused experience while preserving the current dark navy, electric-blue, and yellow visual system.

## What will be built

### 1. Motion and smoother navigation
- Keep native smooth anchor scrolling and add a clear active-section state to the fixed navigation.
- Add restrained entrance, depth, and hover motion across headings, cards, timelines, and calls to action.
- Respect reduced-motion preferences and keep all content readable without animation.

### 2. Interactive 3D SOC walkthrough
- Add a full-width, browser-rendered security operations centre scene using Three.js.
- Build four clickable stations: Incident Response, Digital Forensics, Threat Hunting, and Endpoint Security.
- Selecting a station will move the camera, highlight the workstation, and open a concise briefing with tools, workflow, and a link to the related case study.
- Include keyboard-accessible controls, labels, loading feedback, a motion-reduced fallback, and a simplified mobile presentation.

### 3. Detailed case-study pages
- Add dedicated pages for:
  - Encrypted App Data Recovery Framework
  - SOC Investigation Scenarios
- Each page will include an executive summary, scope, tools, evidence timeline, investigation steps, findings, outcome, and lessons learned.
- The thesis page will use the verified project details already supplied.
- SOC scenarios will be explicitly labelled as anonymized demonstrations based on the stated toolset and responsibilities, avoiding invented employer/client claims or unsupported performance figures.
- Add links between the home page, 3D hotspots, and case-study pages.

### 4. AI recruiter role matcher
- Add a recruiter panel where someone can paste a security or IT role description.
- Send the role description and a curated, factual version of the portfolio to Lovable AI on the server using `openai/gpt-6-astra`.
- Return a structured match summary: strongest skills, relevant experience, best-fit projects, gaps to discuss, and suggested interview topics.
- Show progress, reasoning status, validation, empty states, and the exact safe error returned by the AI service.
- Do not claim hiring suitability or fabricate missing qualifications; recommendations will be grounded only in the portfolio content.

## Technical approach
- Extract shared portfolio and case-study facts into reusable typed data modules.
- Add small focused components for motion, the 3D scene, hotspots, timelines, evidence panels, and the recruiter matcher.
- Add route files for both case studies, each with unique page metadata.
- Use React Three Fiber/Drei for the 3D scene and Motion for interface animation.
- Use a TanStack server function for the one-shot AI match, with the API key and prompt kept server-side.
- Stream the AI request through the Responses API and return validated structured output.
- No recruiter text or AI results will be stored after the request.

## Validation
- Check desktop and mobile layouts, keyboard access, reduced-motion behavior, 3D loading/fallback states, hotspot navigation, and case-study links.
- Run one real AI role-match request and verify success and error handling.
- Confirm every content page has complete, unique social and search metadata.

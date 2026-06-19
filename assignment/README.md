# Reimagining Recommendations for the AI-Native Revenue Platform

**Group Product Manager Assignment Submission**

> Reframing the recommendation engine from a *content feature* into a **Revenue Context Intelligence Platform** — a foundational AI capability that powers content, coaching, learning, readiness, roleplay, and next-best-action recommendations across every revenue workflow and surface.

---

## The one-sentence thesis

The most valuable thing we own is not a recommendation algorithm — it is **revenue context**. If we turn that context into a governed, explainable, API-first intelligence layer, recommendations stop being a feature inside one product and become a platform capability the entire ecosystem (CRM, partners, embedded surfaces, and future AI agents) builds on.

---

## Recommended submission

Submit [`01-strategy-and-prd-document.md`](./01-strategy-and-prd-document.md) as a single polished PDF. It follows the assignment's requested document format and contains the strategy, high-level roadmap, one focused PRD, rollout considerations, and visual diagrams in one narrative.

## Supporting working artifacts

| # | Artifact | File | What it proves |
|---|----------|------|----------------|
| 1 | **Strategy and PRD Document** | [`01-strategy-and-prd-document.md`](./01-strategy-and-prd-document.md) | Recommended panel submission: strategy, roadmap, focused PRD, rollout, and diagrams |
| 2 | **Original Executive Strategy Deck** | [`01-executive-strategy-deck.md`](./01-executive-strategy-deck.md) | Earlier slide-oriented working draft; retain as source material, not the primary submission |
| 3 | **Expanded Product Requirements Document** | [`02-prd-context-intelligence-recommendation-service.md`](./02-prd-context-intelligence-recommendation-service.md) | Supporting long-form PRD working draft |
| 4 | **Architecture Package** | [`03-architecture-package.md`](./03-architecture-package.md) | Supporting technical detail: diagrams, API design, MCP tools, and sample payloads |

## How to use it

- **Panel pre-read:** send the exported strategy-and-PRD PDF.
- **Panel presentation:** screen-share the PDF and follow its suggested 30-minute discussion path; do not read the document verbatim.
- **Follow-up detail:** use the expanded PRD and architecture package only if the panel asks for implementation depth.

## Core design decisions (the opinionated bets)

1. **Context is the moat, not the model.** We invest in a Context Intelligence Layer that normalizes any context (Opportunity, Account, Call, Lead, Activity, Custom Object, external system) into a shared revenue context graph. Models are swappable; the context graph compounds.
2. **One recommendation service, many recommendation types.** Content, coaching, learning, readiness, roleplay, and next-best-action are all the same retrieve→rank→explain→deliver pattern over different candidate sets. We build the pattern once.
3. **API-first and MCP-native from day one.** Every recommendation is reachable by API and exposed as MCP tools so that CRM, partners, embedded surfaces, and AI agents are all first-class consumers — not afterthoughts.
4. **Explainability and governance are P0, not P2.** In enterprise revenue workflows, an unexplainable recommendation is an unusable one. Every recommendation ships with its reasons, sources, and a confidence signal, under tenant-scoped governance.
5. **We earn trust before we automate.** The roadmap deliberately sequences *assistive* recommendations before *autonomous* agent actions.

---

*Submitted as a Group Product Manager work sample. All company references are illustrative.*

# Reimagining Recommendations for the AI-Native Revenue Platform

**Group Product Manager Assignment Submission**

> Reframing the recommendation engine from a *content feature* into a **Revenue Context Intelligence Platform** — a foundational AI capability that powers content, coaching, learning, readiness, roleplay, and next-best-action recommendations across every revenue workflow and surface.

---

## The one-sentence thesis

The most valuable thing we own is not a recommendation algorithm — it is **revenue context**. If we turn that context into a governed, explainable, API-first intelligence layer, recommendations stop being a feature inside one product and become a platform capability the entire ecosystem (CRM, partners, embedded surfaces, and future AI agents) builds on.

---

## What's in this package

| # | Artifact | File | What it proves |
|---|----------|------|----------------|
| 1 | **Executive Strategy Deck** | [`01-executive-strategy-deck.md`](./01-executive-strategy-deck.md) | Strategic framing, platform vision, roadmap, and executive storytelling (15 slides) |
| 2 | **Product Requirements Document** | [`02-prd-context-intelligence-recommendation-service.md`](./02-prd-context-intelligence-recommendation-service.md) | Enterprise PRD depth — personas, 20+ stories, functional/NFRs, data model, edge cases |
| 3 | **Architecture Package** | [`03-architecture-package.md`](./03-architecture-package.md) | Technical credibility — Mermaid diagrams, API design, MCP tools, sample payloads |

## How to read it

- **If you have 5 minutes:** read Slides 2, 5, 7, and 11 of the deck.
- **If you're evaluating product depth:** read the PRD (Artifact 2).
- **If you're evaluating technical credibility:** read the Architecture Package (Artifact 3).

## Core design decisions (the opinionated bets)

1. **Context is the moat, not the model.** We invest in a Context Intelligence Layer that normalizes any context (Opportunity, Account, Call, Lead, Activity, Custom Object, external system) into a shared revenue context graph. Models are swappable; the context graph compounds.
2. **One recommendation service, many recommendation types.** Content, coaching, learning, readiness, roleplay, and next-best-action are all the same retrieve→rank→explain→deliver pattern over different candidate sets. We build the pattern once.
3. **API-first and MCP-native from day one.** Every recommendation is reachable by API and exposed as MCP tools so that CRM, partners, embedded surfaces, and AI agents are all first-class consumers — not afterthoughts.
4. **Explainability and governance are P0, not P2.** In enterprise revenue workflows, an unexplainable recommendation is an unusable one. Every recommendation ships with its reasons, sources, and a confidence signal, under tenant-scoped governance.
5. **We earn trust before we automate.** The roadmap deliberately sequences *assistive* recommendations before *autonomous* agent actions.

---

*Submitted as a Group Product Manager work sample. All company references are illustrative.*

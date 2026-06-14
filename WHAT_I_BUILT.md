# What I Built — Revenue Readiness OS

---

## Repository Structure

| Folder | Contents |
|---|---|
| `docs/` | Complete product documentation set |
| `artifacts/` | Product artifacts — one-pagers, summaries |
| `diagrams/` | Architecture and workflow diagrams |
| `prototype/` | Fully functional local prototype |

---

## Product Documentation

| File | Contents |
|---|---|
| `docs/` | Vision, requirements, personas, user journeys, agent architecture, demo scenario, data model, governance, metrics, roadmap, GTM |

---

## Standard Portfolio Documents

| File | Contents |
|---|---|
| `PORTFOLIO_AUDIT.md` | Honest evaluation of completeness, strengths, and what's missing |
| `PRODUCT_THESIS.md` | The core bet, problem framing, and strategic rationale |
| `WHAT_I_BUILT.md` | This file |
| `OUTCOME_MODEL.md` | Business outcomes, success metrics, and how value is measured |
| `AI_PRODUCT_JUDGMENT.md` | AI-specific product decisions and the reasoning behind them |

---

## Working Prototype

10 pages with realistic mock data:
- **Dashboard** — Readiness overview, team skill heatmap, coaching queue, alert feed
- **Rep Profile** — Individual readiness score across 10 dimensions, skill history, pending certifications
- **AI Roleplay** — Buyer simulation interface with real-time scoring and session history
- **Coaching Queue** — Manager view with prioritised coaching actions and rep drill-down
- **Learning Paths** — Personalised learning sequences with progress tracking
- **Certifications** — AI-graded certification hub with attempt history
- **Content Library** — AI-curated content recommendations matched to skill gaps
- **Deal Readiness** — Per-deal enablement recommendations by pipeline stage
- **Team Analytics** — Skill gap heatmap, trend analysis, cohort comparison
- **Executive Insights** — Portfolio readiness trends, ROI metrics, CRO-ready summaries

---

## Core Agents

| Agent | Purpose |
|---|---|
| Readiness Score Agent | Computes composite skill scores across 10 dimensions from multiple signal sources |
| Roleplay Agent | Plays buyer persona in simulated conversations, scores rep responses |
| Coaching Recommendation Agent | Generates specific, actionable coaching actions for managers |
| Content Recommendation Agent | Matches content to skill gaps and deal context |
| Certification Assessment Agent | Grades certification attempts against rubrics |
| Executive Reporting Agent | Synthesises team-level readiness data into CRO-ready summaries |

---

## Key Design Decisions Encoded in the Docs

**Readiness score is explainable** — not a black-box number. Every score shows the 10 sub-dimensions, the signal sources for each, and the trend over time.

**Coaching queue over analytics dashboard** — the product gives managers actions, not data. The transition from "here is what the numbers say" to "here is what you should do" is the core product value.

**Roleplay scoring is criteria-based** — the AI scores on defined criteria (discovery quality, objection handling, value articulation) with rubrics, not just overall "performance." This makes the feedback actionable.

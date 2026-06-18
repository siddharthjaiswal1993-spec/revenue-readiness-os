# Artifact 2 — Product Requirements Document

# Context Intelligence Recommendation Service

| | |
|---|---|
| **Status** | Proposed — for review |
| **Author** | Group Product Manager |
| **Reviewers** | CPO, VP Eng, VP Product (Platform), Principal Architect, Security/Compliance, GTM Lead |
| **Target** | Phase 1 GA in 6 months; full vision over ~18 months (see Rollout) |
| **Related** | Executive Strategy Deck (Artifact 1), Architecture Package (Artifact 3) |

---

## 1. Overview

The Context Intelligence Recommendation Service (CIRS) is the foundational AI platform capability that turns **any revenue context** into **any type of recommendation** delivered to **any surface**. It replaces and subsumes the current rules-based, opportunity-centric, CRM-bound, content-only recommendation engine.

CIRS is composed of three logical layers — a **Context Intelligence Layer** (ingest, resolve, enrich context into a Revenue Context Graph), a **Recommendation Intelligence Layer** (intent → retrieve → rank → personalize → govern → explain → learn), and an **Open Delivery Layer** (REST/GraphQL APIs, MCP tools, embedded SDK, events, partner gateway).

It supports six recommendation types as plugins on one shared pipeline: **content, coaching, learning, readiness, roleplay, and next-best-action (NBA)**.

This PRD specifies the service: its users, requirements, data model, metrics, edge cases, and rollout. It is intentionally opinionated about what we will *not* do (see Non-Goals).

---

## 2. Problem Statement

Our recommendation engine was built for a narrower world: deterministic plays driven by opportunity fields, surfaced inside the CRM, recommending content only. That design has four structural limits:

1. **Context-blind.** It reasons only over opportunity attributes. It cannot see the signals that actually predict the next best action — call outcomes, account health, buyer engagement, rep skill gaps, custom objects, or external systems.
2. **Single-output.** It recommends content. It cannot recommend coaching, learning, readiness interventions, roleplay practice, or next-best-actions — the things that move revenue and develop reps.
3. **Single-surface.** It lives in the CRM UI. There is no API, no MCP, no embedded or partner delivery, and no path to serving future AI agents.
4. **Static.** Rules are hand-maintained, don't learn from outcomes, and accrue maintenance debt as plays multiply.

The result: we under-use our most valuable asset (revenue context), we can't meet enterprise expectations for explainable/governed AI, and we are not positioned for the agentic workflows our customers are already building.

---

## 3. Goals

- **G1.** Ingest and unify context from multiple sources (CRM, calls, activities, custom objects, external systems) into a governed Revenue Context Graph.
- **G2.** Generate **explainable** recommendations across multiple contexts (opportunity, account, contact, lead, call, activity stream, custom object).
- **G3.** Support multiple recommendation types on one shared pipeline (content first; coaching, learning, readiness, roleplay, NBA over time).
- **G4.** Deliver recommendations through multiple surfaces: CRM, REST/GraphQL APIs, MCP tools, embedded SDK, events/webhooks, partner gateway.
- **G5.** Ship enterprise-grade trust: multi-tenant isolation, governance/policy, full auditability, and 100% explanation coverage.
- **G6.** Establish a feedback flywheel so recommendation relevance improves with use.
- **G7.** Migrate existing content recommendations onto CIRS with **zero quality regression**.

---

## 4. Non-Goals

- **NG1.** We will **not** build our own foundation models. CIRS is model-agnostic; models are swappable behind an abstraction.
- **NG2.** We will **not** fully automate seller actions in early phases. Autonomous agent actions are gated behind human-set autonomy levels and arrive in Phase 4.
- **NG3.** We will **not** replace the system of record (CRM). CIRS reads context and writes recommendations/actions back via integration; it is not a CRM.
- **NG4.** We will **not** expose raw cross-tenant data or train shared models on tenant data without explicit contractual consent.
- **NG5.** We will **not** ship a recommendation without an explanation. (Explainability is a hard requirement, not a feature.)
- **NG6.** Phase 1 will **not** expand recommendation scope beyond migrated content recos; breadth follows proven value.

---

## 5. User Personas

| Persona | Role & context | Primary jobs-to-be-done | What CIRS gives them |
|--------|----------------|-------------------------|----------------------|
| **Revenue Leader** (CRO/VP Sales) | Owns the number; thinks in pipeline, forecast, retention. | Improve win rate, velocity, forecast accuracy; scale what good reps do. | Aggregate intelligence on where the platform is influencing outcomes; confidence the AI is governed. |
| **Sales Manager** | Coaches 6–10 reps; accountable for team performance. | Spot deal risk early; coach the right reps on the right skills. | Account/deal risk flags + targeted coaching and readiness recommendations per rep. |
| **Sales Rep** | In the deal daily; time-starved; lives in CRM/email/calls. | Know the single next best action; find the right content fast; close skill gaps. | In-context next-best-actions, content, and practice — with reasons they can trust. |
| **Enablement Leader** | Owns content, training, certification, readiness. | Ensure reps are ready; measure content/program effectiveness; close skill gaps at scale. | Insight into which content/coaching/learning is recommended and works; ability to define readiness logic. |
| **Platform Admin / RevOps** | Configures the platform for the org; owns governance and integrations. | Connect data sources; set policy/permissions; ensure compliance; control autonomy. | Connector config, governance/policy console, custom objects/types, audit logs, autonomy controls. |
| **Developer / Partner** *(secondary)* | Builds integrations or embeds recommendations. | Consume recommendations/context via API/MCP; contribute connectors. | Versioned APIs, MCP tools, SDK, sandbox, docs. |

---

## 6. User Stories

> Format: *As a [persona], I want [capability], so that [outcome].* (P0 = Phase 1, P1 = Phase 2, P2 = Phase 3+)

**Sales Rep**
1. **(P0)** As a rep, I want recommended content for my open opportunity in the CRM, so that I can move the deal forward without searching. *(parity with today)*
2. **(P0)** As a rep, I want each recommendation to show *why* it was suggested and its source, so that I trust it before acting.
3. **(P1)** As a rep, I want a next-best-action on an account based on call outcomes and activity, so that I know what to do next without analyzing everything myself.
4. **(P1)** As a rep, I want to dismiss a recommendation and say why, so that I stop seeing irrelevant suggestions.
5. **(P1)** As a rep, I want recommendations to consider my recent calls, so that suggestions reflect what actually happened in the deal.
6. **(P2)** As a rep, I want recommended roleplay practice when a call shows a skill gap, so that I improve before my next conversation.
7. **(P2)** As a rep, I want recommendations in my email/CRM sidebar (embedded), so that I don't switch tools.

**Sales Manager**
8. **(P1)** As a manager, I want deal-risk flags with the reasons behind them, so that I can intervene early on the right deals.
9. **(P1)** As a manager, I want coaching recommendations per rep based on their call patterns, so that I coach the right skill to the right person.
10. **(P1)** As a manager, I want to see which recommendations my team accepted and the outcomes, so that I can measure impact.
11. **(P2)** As a manager, I want readiness recommendations before a major deal stage, so that my rep is prepared for the next milestone.

**Enablement Leader**
12. **(P0)** As an enablement leader, I want to see which content is being recommended and used, so that I can prune and prioritize content investment.
13. **(P1)** As an enablement leader, I want to define readiness/skill logic that drives learning recommendations, so that training maps to real gaps.
14. **(P2)** As an enablement leader, I want learning recommendations triggered by observed skill gaps, so that training happens at the moment of need.

**Revenue Leader**
15. **(P1)** As a revenue leader, I want to see where recommendations correlate with velocity/win-rate lift, so that I can justify and scale the investment.
16. **(P0)** As a revenue leader, I want assurance that AI recommendations are governed, auditable, and explainable, so that I can stand behind them with the board and security.

**Platform Admin / RevOps**
17. **(P0)** As an admin, I want to connect CRM, call, and activity sources, so that recommendations use complete context.
18. **(P0)** As an admin, I want to set policies controlling what can be recommended and to whom, so that recommendations comply with our rules.
19. **(P1)** As an admin, I want a full audit trail of recommendations, inputs, and actions, so that I can satisfy compliance and security reviews.
20. **(P1)** As an admin, I want to register a custom object as a context source, so that our unique data shapes recommendations.
21. **(P2)** As an admin, I want to set autonomy levels per recommendation type, so that I control where the platform may act versus only suggest.

**Developer / Partner**
22. **(P2)** As a developer, I want to request recommendations via REST/GraphQL with a context payload, so that I can embed them in our app.
23. **(P2)** As an agent developer, I want recommendations and explanations exposed as MCP tools, so that an AI agent can call them safely within policy.
24. **(P2)** As a partner, I want to contribute a connector for an external system, so that our customers' context flows into the platform.
25. **(P0)** As a developer, I want a sandbox tenant with sample payloads, so that I can build and test without touching production.

---

## 7. Functional Requirements

### 7.1 Context Ingestion
- **FR-1.** Ingest from CRM (opportunities, accounts, contacts, leads, custom objects), call intelligence (transcripts, scores, outcomes), and activity streams (emails, meetings, engagement), via batch and streaming.
- **FR-2.** Provide a connector framework for external systems and partner-contributed connectors, with schema mapping.
- **FR-3.** Support tenant-defined custom objects as context sources with field-level mapping.
- **FR-4.** Capture source, timestamp, and lineage for every ingested signal (provenance).

### 7.2 Context Understanding
- **FR-5.** Perform identity/entity resolution to unify records referring to the same account/contact/deal across sources.
- **FR-6.** Normalize heterogeneous inputs into the Revenue Context Graph schema.
- **FR-7.** Enrich context with derived signals: intent, momentum, risk, engagement, and skill-gap indicators.
- **FR-8.** Maintain embeddings/features for entities and content to enable semantic retrieval.

### 7.3 Recommendation Generation
- **FR-9.** Detect intent for a given context + requesting workflow.
- **FR-10.** Retrieve candidate items via hybrid semantic + structured search, scoped to the candidate set for the requested recommendation type.
- **FR-11.** Rank candidates using context, intent, outcome signals, freshness, and personalization features.
- **FR-12.** Personalize results to the individual (role, tenure, history, skill profile) and tenant.
- **FR-13.** Support pluggable recommendation types (content, coaching, learning, readiness, roleplay, NBA) on the shared pipeline.
- **FR-14.** Return a ranked list with scores, confidence, and a stable recommendation ID.

### 7.4 Recommendation Delivery
- **FR-15.** Expose synchronous request/response APIs (REST + GraphQL) for on-demand recommendations.
- **FR-16.** Expose an event/webhook stream for proactive, context-triggered recommendations.
- **FR-17.** Provide an MCP server exposing recommendations, explanations, context lookup, and feedback as governed tools.
- **FR-18.** Provide an embedded SDK/widget for in-context rendering with explainability UI.
- **FR-19.** Support multi-surface delivery to CRM, embedded, partner systems, and agents from the same backend.

### 7.5 Explainability
- **FR-20.** Every recommendation must include human-readable reasons, cited source signals, and a confidence value.
- **FR-21.** Provide an explanation API/endpoint to retrieve the full reasoning and inputs for any recommendation ID.
- **FR-22.** Suppress (do not surface) recommendations whose confidence is below the tenant-configured threshold.

### 7.6 Feedback Capture
- **FR-23.** Capture explicit feedback: accept, dismiss (with reason), rate, save.
- **FR-24.** Capture implicit feedback: impression, open, use, and downstream outcome linkage.
- **FR-25.** Feed feedback into ranking/personalization on a defined cadence (online where feasible, batch otherwise).

### 7.7 Administration
- **FR-26.** Connector management UI/API (configure, map, test, monitor sources).
- **FR-27.** Recommendation-type and candidate-set configuration per tenant.
- **FR-28.** Custom object/type registration.
- **FR-29.** Frequency caps and suppression rules per user/type to control noise.

### 7.8 Governance
- **FR-30.** Tenant-scoped policy engine controlling what may be recommended, to whom, and on which surfaces.
- **FR-31.** Permission-aware results (a user only receives recommendations referencing data/content they may access).
- **FR-32.** Autonomy-level controls per recommendation type (suggest-only → suggest+prepare → act-with-approval → autonomous).
- **FR-33.** Full audit log of recommendations, inputs, model/version, policy decisions, and actions.

---

## 8. Non-Functional Requirements

| # | Category | Requirement |
|---|----------|-------------|
| **NFR-1** | **Latency** | Synchronous recommendation p95 ≤ 500 ms (cached context), p99 ≤ 1.5 s; explanation retrieval p95 ≤ 300 ms. Heavy context assembly is pre-computed asynchronously. |
| **NFR-2** | **Availability** | 99.9% for the recommendation API in Phase 1; 99.95% target as it becomes a critical path. Graceful degradation to last-good / rules fallback. |
| **NFR-3** | **Scalability** | Horizontal scale to enterprise tenants; handle context-graph growth and high-fan-out event triggers without latency regression. |
| **NFR-4** | **Security** | Multi-tenant isolation; encryption in transit and at rest; least-privilege access; SOC 2 / GDPR alignment; no cross-tenant training without consent. |
| **NFR-5** | **Auditability** | Immutable audit log of inputs, model/version, policy decisions, outputs, and feedback for every recommendation, retained per tenant policy. |
| **NFR-6** | **Observability** | Metrics, tracing, and logging across all layers; per-tenant quality dashboards; model/version performance monitoring; cost-per-recommendation tracking. |
| **NFR-7** | **Explainability coverage** | 100% of surfaced recommendations carry reasons + sources + confidence (hard guardrail). |
| **NFR-8** | **Cost** | Cost-per-recommendation is a tracked SLO; caching and pre-computation keep inference cost bounded; model abstraction allows cost/perf routing. |

---

## 9. Recommendation Architecture (summary)

> Full diagrams and API specs are in Artifact 3.

**Inputs:** Context payload or entity reference (e.g., opportunity ID), requesting surface, requesting user (for permissions/personalization), recommendation type(s), and optional constraints (count, filters).

**Processing:** Context assembly from the Revenue Context Graph → intent detection → candidate retrieval (type-scoped) → ranking → personalization → governance/policy → explanation generation → response shaping. Feedback is captured asynchronously and feeds ranking.

**Outputs:** Ranked recommendations, each with: ID, type, target entity, recommended item/action, score, confidence, explanation (reasons + cited sources), and delivery metadata. Plus events for proactive triggers and audit records for every decision.

---

## 10. Data Model

**Core entities**

| Entity | Description | Key attributes |
|--------|-------------|----------------|
| **ContextEntity** | Any revenue object in the graph (opportunity, account, contact, lead, call, activity, custom object). | `id`, `tenant_id`, `type`, `source`, `attributes{}`, `embeddings`, `derived_signals{intent,risk,momentum,engagement}`, `updated_at`, `lineage` |
| **Signal** | A derived or ingested data point linked to entities. | `id`, `tenant_id`, `entity_ids[]`, `signal_type`, `value`, `confidence`, `source`, `timestamp` |
| **RecommendationCandidate** | An item that *could* be recommended (content, course, play, coaching prompt, NBA template). | `id`, `tenant_id`, `type`, `metadata{}`, `embeddings`, `eligibility_rules`, `outcome_stats` |
| **Recommendation** | A generated, ranked recommendation instance. | `id`, `tenant_id`, `target_entity_id`, `type`, `candidate_id_or_action`, `score`, `confidence`, `explanation`, `surface`, `user_id`, `created_at`, `model_version`, `policy_decision` |
| **Explanation** | The reasoning attached to a recommendation. | `recommendation_id`, `reasons[]`, `source_signals[]`, `confidence`, `model_version` |
| **Feedback** | Explicit/implicit signal on a recommendation. | `id`, `recommendation_id`, `user_id`, `feedback_type` (accept/dismiss/rate/open/use/outcome), `reason`, `value`, `timestamp` |
| **User** | The requesting/receiving person. | `id`, `tenant_id`, `role`, `tenure`, `skill_profile`, `permissions`, `preferences` |
| **Policy** | Tenant governance rule. | `id`, `tenant_id`, `scope`, `rule`, `autonomy_level`, `applies_to_types[]` |
| **Connector** | A configured context source. | `id`, `tenant_id`, `source_type`, `schema_mapping`, `status`, `last_sync` |

**Key relationships**
- `ContextEntity` —(linked via)— `Signal` —(enriches)→ context used for recommendations.
- `Recommendation` —1:1— `Explanation`; —1:many— `Feedback`; —many:1— `User`, `ContextEntity`, `Policy`.
- `RecommendationCandidate` —many:many— `Recommendation` (a candidate can be recommended many times; a recommendation references one candidate or an action).
- All entities are scoped by `tenant_id` (hard isolation boundary).

---

## 11. Success Metrics

**North Star:** *Accepted, outcome-linked recommendations per active seller per week.*

| Tier | Metrics |
|------|---------|
| **Product metrics** | Recommendation WAU/MAU, % sellers acting on recos, acceptance rate, dismiss rate, time-to-act, explanation-helpfulness rating |
| **Business metrics** | Deal velocity, win rate, new-rep ramp time, content utilization, renewal/retention lift, forecast accuracy influence |
| **AI metrics** | Retrieval precision/recall, ranking NDCG, % recommendations with valid citations, hallucination/error rate, confidence calibration |
| **Platform metrics** | p95/p99 latency, availability, error rate, cost-per-recommendation, # API/MCP consumers, # partner integrations |

**Guardrails (must not regress):** explanation coverage = 100%, governance violations = 0, seller "noise" complaints below threshold, p95 latency within budget.

---

## 12. Edge Cases

1. **Cold-start tenant** — no history/feedback yet → fall back to content-based + popularity priors; clearly mark lower confidence.
2. **Cold-start user** — new rep with no behavior → personalize on role/tenure/team norms until individual signal accrues.
3. **Sparse context** — opportunity with almost no data → return fewer, lower-confidence recos or none; never fabricate reasons.
4. **Conflicting signals** — call says "won," CRM says "lost" → surface the conflict, lower confidence, prefer most-recent/most-authoritative source, log for resolution.
5. **Stale context** — last sync was days ago → flag staleness, optionally suppress time-sensitive NBAs, trigger refresh.
6. **Below-confidence threshold** — no candidate clears the bar → return empty with an honest "not enough signal" state, not filler.
7. **Permission mismatch** — top candidate references content the user can't access → filter pre-ranking; never leak existence of restricted items.
8. **Duplicate/near-duplicate candidates** — multiple versions of the same asset → dedupe; prefer latest/approved.
9. **Custom object with unmapped fields** — admin added an object but mapping incomplete → ingest what's mapped, warn admin, don't block other recos.
10. **Deleted/merged entities** — account merged or deal deleted after a reco was issued → invalidate stale recommendations; resolve to the surviving entity.
11. **External system outage** — a connector source is down → degrade gracefully using cached context; mark affected recos as partial.
12. **Model/provider outage or timeout** — inference unavailable → fall back to cached recos or rules layer; never hard-fail the host surface.
13. **Contradictory policies** — two tenant policies conflict → most-restrictive wins; surface the conflict to admin.
14. **Feedback gaming / noise** — a user mass-dismisses everything → weight feedback by reliability; don't let one user collapse global ranking.
15. **PII / sensitive data in context** — transcript contains sensitive info → apply redaction/handling per policy before use in explanations.
16. **Multi-language context** — calls/content in different languages → language-aware retrieval; don't recommend content in a language the user/account can't use.
17. **Throttling / rate limits** — partner over-calls the API → enforce per-tenant quotas; return clear 429s with retry guidance.
18. **Agent requests beyond autonomy level** — an agent tries to *act* where policy says suggest-only → block the action, return a suggestion + policy reason, log it.

---

## 13. Risks

(Summary; full matrix in Artifact 1, Slide 13.)
- **Enterprise:** tenant data isolation/leakage; black-box failing security review → mitigated by hard isolation, explainability-as-P0, audit trail.
- **AI:** hallucinated/wrong recos; confidence miscalibration → grounded retrieval + citations, thresholds, eval harness on every model change, human-in-loop for high stakes.
- **Platform:** over-abstraction before value proven; model/vendor/cost volatility → narrow Phase 1, model-agnostic abstraction, cost-per-reco SLO.
- **Adoption:** recommendation noise; change resistance → North Star = *accepted* recos, frequency caps, in-workflow embedding, manager-led rollout.

---

## 14. Rollout Plan

| Stage | Scope | Exit criteria |
|------|-------|---------------|
| **Pilot (shadow)** | Internal + 2–3 design partners; new engine runs alongside legacy, no end-user exposure. | New engine ≥ legacy quality on acceptance proxy; explainability validated. |
| **Beta (opt-in)** | Select tenants, one flagship workflow, content + first new type. | Acceptance rate, latency, and guardrails within target; positive qualitative feedback. |
| **GA** | All customers; migrated content recos + proven new types; docs, support, SLAs live. | Stable at scale; support readiness; SLAs met. |
| **Enterprise** | Tenant config, governance console, custom objects/types, embedded/partner/MCP. | Custom-object and policy adoption; first partner integration live. |

**Legacy migration:** shadow → compare/tune to ≥ parity → canary % with instant rollback → cut over content recos → retain rules as governance/override layer → decommission redundant rules. (Detail in Artifact 1, Slide 14.)

---

## 15. Open Questions

1. **Build vs. buy for the model layer** — which inference provider(s), and what's our routing/cost strategy across them? (Default: model-agnostic abstraction, start with a leading provider.)
2. **Online vs. batch learning** — what's the right cadence for feedback to influence ranking given latency and cost constraints?
3. **Outcome attribution** — how do we credibly link a recommendation to a downstream business outcome (win, renewal) given long sales cycles?
4. **Cross-tenant learning** — do we offer an opt-in "benchmark/shared intelligence" tier, and what are the contractual/privacy boundaries?
5. **Autonomy ladder definition** — exactly what actions are permitted at each autonomy level, and who approves promotions?
6. **Pricing/packaging** — is CIRS a platform add-on, a per-seat capability, or consumption-priced for API/MCP usage? (GTM partnership needed.)
7. **Custom recommendation-type SDK scope** — how much can enterprises extend before it becomes unsupportable?

---

*End of Artifact 2.*

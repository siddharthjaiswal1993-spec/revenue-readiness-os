# Artifact 1 — Executive Strategy Deck

### *Reimagining Recommendations for the AI-Native Revenue Platform*

**Format:** Slide-by-slide narrative deck (15 slides). Each slide includes Title, Objective, Key Message, Detailed Content, Visual/Diagram Recommendation, and Speaker Notes.

**Audience:** CPO, CTO, VP Eng, VP Product, GTM leadership, and the executive interview panel.

**Narrative arc:** *We're sitting on the most valuable asset in revenue software — context — and we're using 10% of it. Here's how we turn it into a platform.*

---

## Slide 1 — Title

**Objective:** Set an ambitious, platform-level frame before a single feature is mentioned.

**Key message:** This is not a recommendations upgrade. It is a platform bet.

**Detailed content:**
- **Title:** Reimagining Recommendations for the AI-Native Revenue Platform
- **Subtitle:** From a rules-based content engine to a *Revenue Context Intelligence Platform*
- **Tagline:** *Any context. Intelligent recommendations. Any surface.*
- Presenter name / role / date

**Visual/diagram recommendation:** Full-bleed dark slide. A single thin horizontal pipeline graphic that will be "upgraded" visually as the deck progresses: `Context → Intelligence → Surface`. Logo lockup bottom-left.

**Speaker notes:** "I want to start by reframing the question. The brief asks how we modernize the recommendation engine. I'm going to argue the recommendation engine is the wrong unit of analysis. The real asset is revenue context — and once you see it that way, the strategy changes completely. Let me show you."

---

## Slide 2 — Executive Summary

**Objective:** Give a busy executive the entire thesis in 60 seconds.

**Key message:** We own revenue context. Productize it as a platform, and recommendations become a durable, compounding advantage across every workflow and surface.

**Detailed content:**

| | |
|---|---|
| **Problem** | Our recommendation engine is rules-based, opportunity-centric, CRM-bound, and content-only. It can't see the full revenue context, can't reason, can't explain itself, and can't be reached outside the CRM. As buyers and competitors go AI-native, a static rules engine becomes a liability. |
| **Opportunity** | We already capture the richest revenue context in the category — opportunities, accounts, contacts, calls, activities, custom objects, plus learning and readiness signals. Almost none of it powers recommendations today. |
| **Vision** | Build a **Revenue Context Intelligence Platform**: a governed, explainable, API-first AI layer that turns *any* context into *any* recommendation type (content, coaching, learning, readiness, roleplay, next-best-action) delivered to *any* surface (CRM, APIs, MCP, embedded, partners, agents). |
| **Expected outcomes** | (1) Higher seller productivity and win rates via timely, relevant next-best-actions; (2) a new platform/ecosystem monetization surface; (3) a defensible data moat that compounds with every interaction; (4) enterprise-grade trust through explainability and governance. |

**Visual/diagram recommendation:** Four-quadrant layout (Problem / Opportunity / Vision / Outcomes), each with a single bold metric or phrase. Keep it scannable.

**Speaker notes:** "If you remember one slide, remember this one. We have the context. We're barely using it. The bet is to productize context as a platform — and that bet pays off in seller productivity, a new ecosystem surface, and a moat that gets stronger every quarter."

---

## Slide 3 — Current State Assessment

**Objective:** Be honest and precise about what we have, what's good, and what's structurally limiting.

**Key message:** The current engine is a competent point solution built on assumptions that no longer hold.

**Detailed content:**

**Current architecture (today):**

```
Opportunity Attributes  →  Rules Engine  →  Recommended Content
   (stage, amount,          (if/then,         (a deck, a doc,
    product, region)         hand-tuned)        a one-pager)
```

**Strengths (real, keep them):**
- **Predictable & explainable by construction** — a rule is its own explanation.
- **Fast to ship narrow wins** for well-understood plays.
- **Trusted by admins** who like deterministic control.
- **Low latency, low cost** — no inference in the path.

**Limitations (structural, not incremental):**
- **Single context.** Only opportunity attributes. Blind to calls, activities, account health, persona, intent.
- **Single recommendation type.** Content only. No coaching, learning, readiness, roleplay, or next-best-action.
- **Single surface.** Locked inside the CRM UI. No API, no MCP, no embedded/partner delivery.
- **Doesn't learn.** Rules are hand-maintained; relevance decays; no feedback loop.
- **Doesn't scale operationally.** Every new play = more rules = more maintenance debt.

**Visual/diagram recommendation:** Left: the simple linear pipeline above. Right: a 2-column "Strengths / Limitations" table. Use a muted color for strengths (keep) and a warning accent for limitations (the gap we're closing).

**Speaker notes:** "I want to be fair to what exists. The rules engine isn't bad — it's *narrow*. It assumes one context, one output type, one surface. Every one of those assumptions is now a ceiling. We're not fixing bugs; we're removing ceilings."

---

## Slide 4 — Why Change Now

**Objective:** Establish urgency with external forces, not internal preference.

**Key message:** Three clocks are converging — buyer behavior, AI capability, and enterprise expectations. Waiting is the risky option.

**Detailed content:**
- **Market shift — the buyer changed.** Revenue teams are drowning in tools and signals; reps spend the majority of their time on non-selling work. The scarce resource is *attention*, and the winning product is the one that tells the rep the single next best thing to do.
- **AI transformation — capability crossed a threshold.** LLMs + retrieval make it feasible to reason over messy, multi-source revenue context and produce explainable recommendations — something rules could never do. Competitors are racing here.
- **Enterprise expectations — the bar moved.** Buyers now expect AI features to be governed, auditable, permission-aware, and explainable. "Black box AI" fails security review. Explainability is now table stakes for enterprise procurement.
- **Platform evolution — integration is the product.** Customers buy platforms that extend into their stack. API-first, MCP-ready, and partner-extensible is becoming a procurement requirement, not a differentiator.
- **Future GTM workflows — agents are coming.** The next interface to revenue software is an agent calling tools. If our intelligence isn't exposed as callable, governed tools, we're invisible to that future.

**Visual/diagram recommendation:** "Three converging clocks/arrows" graphic pointing at a single moment labeled *Now*. Underneath, a thin timeline showing "rules era → context-intelligence era."

**Speaker notes:** "The question isn't *should* we change — it's *can we afford not to*. Buyer behavior, model capability, and enterprise procurement standards are all moving at once. And the agent interface is the kicker: if we don't expose intelligence as governed tools, we don't exist in the agentic workflow our customers are already prototyping."

---

## Slide 5 — Vision: The Revenue Context Intelligence Platform

**Objective:** Plant the central idea in one memorable picture.

**Key message:** Decouple context, intelligence, and delivery — so any context produces any recommendation on any surface.

**Detailed content:**

Future-state pipeline:

```
   ANY CONTEXT              CONTEXT                RECOMMENDATION              ANY SURFACE
                          INTELLIGENCE              INTELLIGENCE
 Opportunity   ┐                                                          ┌  CRM
 Account       │                                                          │  REST/GraphQL APIs
 Contact / Lead│   →   normalize, resolve,   →   retrieve, rank,    →     │  MCP tools (agents)
 Call history  │       enrich into a              personalize,           │  Embedded surfaces
 Activity      │       Revenue Context            explain, govern         │  Partner systems
 Custom objects│       Graph                                             │  Future AI agents
 External sys  ┘                                                          └
```

**The three decouplings that make it a platform:**
1. **Context is decoupled from source.** Add a new context source without touching recommendation logic.
2. **Recommendation type is decoupled from engine.** Add coaching or roleplay recommendations without a new engine.
3. **Delivery is decoupled from surface.** Add a new surface (or an agent) without rebuilding intelligence.

**Visual/diagram recommendation:** The hero diagram of the deck — four stacked layers, left-to-right flow, with the middle two layers (Context Intelligence + Recommendation Intelligence) visually emphasized as "the platform." Call out the three decouplings as labeled seams.

**Speaker notes:** "Here's the whole idea in one picture. Today everything is fused: one context, one engine, one surface. We're going to introduce three clean seams. Each seam is a place the ecosystem can extend us. That's what turns a feature into a platform — and it's why this compounds instead of plateauing."

---

## Slide 6 — Design Principles

**Objective:** Give the team a decision-making constitution so 1,000 future choices stay coherent.

**Key message:** Six principles. Every roadmap and architecture decision must defend itself against them.

**Detailed content:**
1. **Context First.** We optimize for understanding the situation before generating an answer. Better context beats a bigger model.
2. **AI Native.** Reasoning and retrieval are the default mechanism; rules become a *governance and override* layer, not the engine.
3. **Open Platform.** Every capability is an API and an MCP tool. If it isn't callable, it isn't done.
4. **Explainable.** Every recommendation ships with its reasons, sources, and confidence. No unexplained outputs.
5. **Enterprise Extensible.** Multi-tenant isolation, custom objects, custom recommendation types, and admin configurability are first-class.
6. **Human Governed.** Humans set policy, approve autonomy levels, and stay in the loop. The platform recommends; accountable humans decide where it acts alone.

**Visual/diagram recommendation:** Six-tile grid, each tile an icon + principle + one-line "what this rules out." E.g., under *Open Platform*: "Rules out CRM-only delivery."

**Speaker notes:** "Principles are only useful if they kill options. So each of these is paired with what it forbids. 'Explainable' forbids any black-box output reaching a seller. 'Open Platform' forbids a CRM-only feature. These six are how we keep a multi-year platform coherent."

---

## Slide 7 — Platform Architecture

**Objective:** Show this is buildable and well-layered, without drowning execs in detail.

**Key message:** Four clean layers, each independently evolvable, connected by stable contracts.

**Detailed content:**

```
┌─────────────────────────────────────────────────────────────┐
│  CONTEXT SOURCES                                              │
│  CRM • Call Intelligence • Activity Streams • Custom Objects  │
│  • Learning/Readiness signals • External systems (via connectors) │
└───────────────────────────┬─────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  CONTEXT INTELLIGENCE LAYER                                   │
│  Ingestion & connectors • Identity/entity resolution •        │
│  Normalization • Enrichment • Revenue Context Graph + feature/│
│  embedding store • Signal extraction (intent, risk, momentum) │
└───────────────────────────┬─────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  RECOMMENDATION INTELLIGENCE LAYER                            │
│  Intent detection • Candidate retrieval • Ranking & scoring • │
│  Personalization • Policy/governance • Explanation generation │
│  • Feedback/learning loop • Recommendation-type plugins       │
│    (content, coaching, learning, readiness, roleplay, NBA)    │
└───────────────────────────┬─────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  OPEN DELIVERY LAYER                                          │
│  REST/GraphQL APIs • MCP server/tools • Embedded SDK •        │
│  Webhooks/events • Partner gateway • Agent interface          │
└───────────────────────────┬─────────────────────────────────┘
                            ▼
        CONSUMERS: CRM • Reps/Managers • Partners • Agents
```

**Why this shape:**
- **The Revenue Context Graph is the crown jewel.** It's the durable, compounding asset; models in the layer above are swappable.
- **Recommendation types are plugins,** not forks — they share retrieval, ranking, governance, and explainability.
- **Stable contracts between layers** let us swap a model, add a source, or add a surface without a rewrite.

**Visual/diagram recommendation:** The four-layer stack above, with the Context Graph highlighted as a glowing core. (Full Mermaid version lives in Artifact 3.)

**Speaker notes:** "Four layers, and the contracts between them are the whole point. The graph in the middle is what compounds — every call, every activity makes it richer. The models are rented; the graph is owned. And because recommendation types are plugins on shared infrastructure, adding 'roleplay recommendations' is a config-and-candidate-set exercise, not a new product."

---

## Slide 8 — Recommendation Framework

**Objective:** Show the repeatable reasoning pipeline behind *every* recommendation type.

**Key message:** One pipeline, eight stages — built once, reused for content, coaching, learning, readiness, roleplay, and next-best-action.

**Detailed content:**

| Stage | What happens | Why it matters |
|------|---------------|----------------|
| **1. Context Understanding** | Assemble the relevant slice of the Revenue Context Graph for the entity in question. | Garbage context → garbage recommendation. |
| **2. Intent Detection** | Infer what the user/workflow needs *right now* (e.g., "prep for renewal call," "rep is weak on objection handling"). | Relevance is about timing and intent, not just similarity. |
| **3. Retrieval** | Pull candidate items (content, courses, plays, coaching prompts, NBAs) via hybrid semantic + structured search. | Recall before precision. |
| **4. Ranking** | Score candidates against context, intent, outcomes, and freshness. | Turns a list into a *decision*. |
| **5. Personalization** | Adjust for the individual (role, tenure, skill gaps, past behavior) and tenant policy. | A new rep and a top performer need different next actions. |
| **6. Governance** | Apply tenant policies, permissions, compliance, suppression, autonomy level. | Enterprise trust and safety. |
| **7. Explainability** | Generate reasons, cite sources, attach confidence. | An unexplained recommendation is unusable in revenue workflows. |
| **8. Feedback Loops** | Capture explicit (accept/dismiss/rate) and implicit (open/use/outcome) signals to improve ranking. | This is the flywheel — relevance improves with use. |

**Visual/diagram recommendation:** Horizontal 8-stage pipeline with a feedback arrow looping from stage 8 back to stage 4. Annotate that stages 1–2 are *context*, 3–5 are *intelligence*, 6–7 are *trust*, 8 is *the flywheel*.

**Speaker notes:** "This is the assembly line. Notice that nothing here is content-specific — swap the candidate set in stage 3 and the same line produces coaching, or learning, or a next-best-action. That reuse is the efficiency story: we build the hard parts — retrieval, ranking, governance, explainability — exactly once."

---

## Slide 9 — Use Cases

**Objective:** Make the abstraction concrete with situations a GTM leader recognizes instantly.

**Key message:** Same platform, radically different value depending on context.

**Detailed content:**

| Context | Trigger | Recommendation (type) | Outcome |
|--------|---------|------------------------|---------|
| **Opportunity** | Deal stuck in "Negotiation" 20+ days | "Send the ROI calculator + loop in the economic buyer" (content + NBA) | Unsticks pipeline |
| **Account** | Renewal in 60 days, support tickets rising | "Trigger an executive business review; rep needs *churn-save* coaching" (NBA + coaching) | Protects revenue |
| **Call** | Discovery call transcript shows weak qualification | "Assign MEDDICC refresher; practice in roleplay" (learning + roleplay) | Closes skill gap at the moment of need |
| **Lead** | High-intent inbound from target persona | "Use the persona-specific pitch; book within 24h" (content + NBA) | Speeds conversion |
| **Contact** | New champion identified in account | "Share the champion-enablement kit" (content) | Builds multi-threading |
| **Activity stream** | No buyer engagement for 14 days | "Re-engage with X; risk score rising" (NBA + readiness flag) | Early-warning on slippage |
| **Custom object** | Tenant's "Partner Deal" object hits a milestone | Tenant-defined recommendation (extensible) | Proves enterprise extensibility |

**Visual/diagram recommendation:** Cards, one per context, each with an icon, the trigger, and the recommendation. Color-code by recommendation type so the panel sees "one platform, many outputs."

**Speaker notes:** "I deliberately picked seven different *contexts* and show that each produces a different *type* of recommendation. The custom-object row is the punchline — an enterprise customer can define their own object and their own recommendation type, and the platform serves it. That's the difference between a feature and a platform."

---

## Slide 10 — Open Platform Strategy

**Objective:** Show that "open" is a concrete, monetizable strategy — not a slogan.

**Key message:** Every capability is reachable by developers, partners, and agents — and that openness is a growth and defensibility engine.

**Detailed content:**
- **API Strategy.** REST for transactions, GraphQL for flexible context queries, event/webhook stream for push. Versioned, rate-limited, documented. *Every internal surface uses the same public APIs* (dogfooding guarantees quality).
- **MCP Strategy.** Ship a first-party MCP server exposing recommendations, explanations, context lookups, and feedback as governed **tools**. This makes us natively callable by Claude and any agentic workflow — the single highest-leverage bet for the agent era.
- **Embedded Experiences.** A lightweight SDK/widget so recommendations render in-context inside any surface (CRM, email, partner app) with consistent explainability UI.
- **Partner Ecosystem.** Partners both *contribute context* (new connectors) and *consume recommendations* (embed in their workflows). A marketplace for connectors and recommendation-type plugins.
- **Developer Experience.** Sandbox tenant, sample payloads, SDKs, clear docs, predictable errors, and explainability built into every response. DX is the adoption flywheel for a platform.
- **Enterprise Extensibility.** Custom context sources, custom recommendation types, tenant-scoped policy, and config-as-code so large accounts can shape the platform to their motion.

**Visual/diagram recommendation:** Hub-and-spoke: platform core in the center; spokes to API consumers, MCP/agents, embedded surfaces, and partners. Label spokes with "consumes context," "consumes recommendations," "contributes context."

**Speaker notes:** "Open isn't charity — it's strategy. APIs give us reach, MCP gives us the agent era, embedded gives us presence everywhere our customers work, and partners turn our context graph into a two-sided network. And note the dogfooding rule: our own CRM surface calls the exact same public API. That's how we guarantee the platform is actually good."

---

## Slide 11 — Roadmap

**Objective:** Show disciplined sequencing — trust before autonomy, foundation before breadth.

**Key message:** Four phases over ~18 months: build the context foundation, prove value in one workflow, open the platform, then enable agents.

**Detailed content:**

| Phase | Theme | Objectives | Key deliverables | Success metrics |
|------|-------|-----------|------------------|------------------|
| **Phase 1 (Q1–Q2)** | **Context Foundation** | Build the Context Intelligence Layer + Revenue Context Graph; ingest CRM, calls, activities. Re-platform existing content recommendations on the new pipeline (no regression). | Context graph v1, ingestion connectors, retrieval+ranking, explainability v1, content recos migrated | Parity with legacy reco quality; graph coverage of top entities; p95 latency target met |
| **Phase 2 (Q2–Q3)** | **Prove Multi-Context Value** | Expand to account/call/activity contexts; add coaching + readiness recommendation types in one flagship workflow. | Multi-context support, 2 new reco types, feedback loop v1, in-app explainability UI | +X% acceptance rate; measurable lift in target workflow (e.g., deal velocity); WAU of recommendations |
| **Phase 3 (Q3–Q4)** | **Open the Platform** | Public REST/GraphQL APIs, MCP server v1, embedded SDK, partner sandbox. | Versioned public API, MCP tools, embedded widget, developer portal, first partner integration | # external API consumers; # partner integrations; API uptime SLA |
| **Phase 4 (Q1+ next yr)** | **Agentic & Autonomous** | Next-best-action + roleplay reco types; governed agent actions with human-set autonomy levels; custom recommendation types for enterprise. | NBA engine, agent action framework, autonomy policy console, custom-type SDK | # agent-initiated actions accepted; enterprise extensibility adoption; outcome lift (win rate) |

**Visual/diagram recommendation:** Horizontal swim-lane timeline. Annotate the seam between Phase 2 and 3 as "feature → platform," and Phase 3→4 as "assistive → agentic." Mark a "no-regression gate" on Phase 1.

**Speaker notes:** "The sequencing is the strategy. Phase 1 is unglamorous on purpose — we re-platform existing content recos with zero regression so we earn the right to continue. Phase 2 proves multi-context value in one flagship workflow before we go broad. Only then do we open the platform, and only after that do we let agents *act*. We earn trust before we automate."

---

## Slide 12 — Metrics Framework

**Objective:** Show we'll know if this is working — across product, AI, and business.

**Key message:** One North Star, five supporting categories. We measure value delivered, not recommendations served.

**Detailed content:**

- **North Star:** *Accepted, outcome-linked recommendations per active seller per week* — captures relevance (accepted), value (outcome-linked), and reach (per seller) in one number.

| Category | Metrics |
|---------|---------|
| **Adoption** | Recommendation WAU/MAU, % sellers acting on recos, surfaces in use, API/MCP consumers |
| **Quality** | Acceptance rate, dismiss rate, time-to-act, relevance rating, explanation helpfulness |
| **Business outcomes** | Deal velocity, win rate, ramp time for new reps, content utilization, renewal/retention lift |
| **AI effectiveness** | Precision/recall of retrieval, ranking quality (NDCG), hallucination/error rate, % recos with valid citations |
| **Platform health** | p95/p99 latency, availability, error rate, cost per recommendation, model/version performance over time |

**Guardrail metrics (must not regress):** explanation coverage = 100%, governance policy violations = 0, seller-reported "noise" complaints.

**Visual/diagram recommendation:** North Star at the top center; five metric pillars beneath; a thin "guardrails" baseline bar underneath everything.

**Speaker notes:** "I want to call out the North Star specifically: it's *accepted, outcome-linked* recommendations. Not impressions, not clicks — value. That single choice protects us from the classic AI trap of optimizing for engagement and shipping noise. And guardrails are non-negotiable: 100% explanation coverage, zero governance violations."

---

## Slide 13 — Risks & Mitigations

**Objective:** Demonstrate enterprise maturity by naming the hard risks first.

**Key message:** Every major risk has an owned, designed-in mitigation — not a hope.

**Detailed content:**

| Risk | Category | Mitigation |
|-----|----------|------------|
| **Data isolation / leakage across tenants** | Enterprise | Hard multi-tenant isolation; tenant-scoped retrieval; no cross-tenant model training without contract; SOC2/audit logging |
| **Hallucinated or wrong recommendations** | AI | Grounded retrieval + citations; confidence thresholds; suppress below threshold; human-in-loop for high-stakes; eval harness on every model change |
| **"Black box" fails security/procurement review** | Enterprise/AI | Explainability as P0; full audit trail; documented model governance; configurable autonomy |
| **Recommendation noise erodes trust** | Adoption | North Star = *accepted* recos; aggressive suppression; per-user frequency caps; fast dismiss-feedback loop |
| **Platform abstraction over-engineered before value proven** | Platform | Phase 1 ships on the new platform but with *existing* scope; breadth only after value is proven in Phase 2 |
| **Model/vendor dependency & cost volatility** | Platform | Model-agnostic abstraction; the graph (not the model) is the asset; cost-per-reco as a tracked metric; caching |
| **Low adoption / change resistance** | Adoption | Embed in existing workflows (no new app); manager-led rollout; show the "why"; pilot champions |
| **Latency at enterprise scale** | Platform | Async pre-computation of context; caching; tiered SLAs; p95 budget enforced from Phase 1 |

**Visual/diagram recommendation:** Risk matrix (likelihood × impact) with the top risks plotted; mitigations listed beside. Color the residual risk after mitigation.

**Speaker notes:** "I'll lead with the one that kills enterprise deals: data isolation and the black-box problem. We don't bolt explainability and governance on at the end — they're P0, in the architecture, on slide 7. The second category I worry about is *our own* over-engineering, which is exactly why Phase 1 is deliberately narrow."

---

## Slide 14 — Rollout Strategy

**Objective:** Show a credible, low-risk path from first user to full enterprise migration.

**Key message:** Stage-gated rollout with a no-regression migration off the legacy rules engine.

**Detailed content:**
- **Pilot (internal + 2–3 design partners).** Shadow mode: generate recommendations alongside the legacy engine, compare quality, gather feedback. No production exposure to end users yet.
- **Beta (opt-in tenants).** Enable for select tenants in one flagship workflow. Tight feedback loop, daily quality review, explainability on by default.
- **GA.** Open to all customers for the migrated content recommendations + the new types proven in beta. Public docs, support readiness, SLAs in force.
- **Enterprise rollout.** Tenant-scoped config, admin governance console, custom objects/types, partner/embedded options. White-glove for strategic accounts.
- **Migration strategy (off the rules engine):**
  1. Run new engine in **shadow** behind the legacy engine.
  2. **Compare** acceptance/quality; tune until ≥ parity.
  3. **Canary** to a small % of traffic with instant rollback.
  4. **Cut over** content recos; keep rules as an **override/governance layer**, not the engine.
  5. **Decommission** redundant rules; migrate the rest to policy config.

**Visual/diagram recommendation:** Funnel/stage-gate diagram: Pilot → Beta → GA → Enterprise, with the migration shown as a parallel "shadow → canary → cutover" track underneath, including a visible rollback gate.

**Speaker notes:** "The migration is where modernization projects die, so I designed it for reversibility. We run in shadow, prove parity, canary with instant rollback, then cut over — and crucially, rules don't disappear. They graduate into the governance/override layer where deterministic control still belongs. Nobody loses control; they gain intelligence."

---

## Slide 15 — Closing

**Objective:** Land the strategic significance and leave the panel with the thesis.

**Key message:** This is how a recommendations feature becomes a durable platform advantage — and why it compounds.

**Detailed content:**
- **Strategic impact:** We convert our biggest latent asset — revenue context — into a governed, explainable, open intelligence platform. Recommendations stop being a feature and become an *ecosystem surface*.
- **Business outcomes:** Higher seller productivity and win rates; faster ramp; a new platform/partner monetization motion; enterprise trust as a competitive wedge.
- **Why it's durable:** (1) The **context graph compounds** with every interaction — competitors can copy a model, not our accumulated context; (2) **Open APIs + MCP** create switching costs and a partner network; (3) **Explainability + governance** win the enterprise where black boxes lose; (4) **One pipeline, many recommendation types** means we out-ship on cost structure.
- **The ask:** Fund Phase 1. Re-platform on the Context Intelligence foundation with zero regression — and unlock everything above it.

**Visual/diagram recommendation:** Return to the Slide 1 pipeline graphic, now fully "lit up": `Any Context → Context Intelligence → Recommendation Intelligence → Any Surface`. One closing line: *We already own the context. Let's turn it into a platform.*

**Speaker notes:** "Let me close where I started. The brief was about recommendations. The opportunity is a platform. We own the richest revenue context in the category and we're using a fraction of it. Turn it into a governed, open, explainable intelligence layer, and recommendations become a compounding advantage — one a competitor can't copy by copying a model. The ask is simple: fund the foundation. Everything else follows."

---

*End of Artifact 1.*

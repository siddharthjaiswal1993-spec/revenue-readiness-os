# Agentic Workflows

---

## Architecture Overview

Revenue Readiness OS uses a coordinated multi-agent architecture. Each agent is a specialized AI component with defined inputs, reasoning tasks, and outputs. Agents communicate through a shared event bus and a central readiness data store.

All agents default to Level 2 autonomy (suggest with human review). Higher autonomy levels are unlocked after 90 days of verified accuracy per agent per customer.

---

## Agent 1: Readiness Intelligence Agent

**Purpose:** Maintains the continuous readiness score for every rep. The central data synthesis layer.

**Inputs:**
- Roleplay attempt scores (from Roleplay Simulation Agent)
- Assessment completion results
- Call intelligence signals (from integration)
- Certification status
- Learning path completion events
- Manager coaching log entries
- Time-decay factors

**Reasoning Task:**
Synthesize multi-source skill signals into a coherent, explainable skill profile per rep. Detect anomalies (sudden drops, scoring inconsistencies). Generate natural-language explanations for score changes.

**Actions:**
- Update rep skill score per dimension
- Compute composite readiness score
- Generate score change explanation
- Trigger alerts at threshold crossings
- Flag score anomalies for human review

**Outputs:**
- Updated `ReadinessScore` record per rep
- Alert events (critical / at-risk threshold crossing)
- Weekly score summary for manager digest

**Human Approval Points:**
- Critical threshold crossing → manager must acknowledge before coaching queue updates
- Score anomaly (drop >20 points in <7 days) → escalate to enablement admin

**Failure Modes:**
- Stale data: score not updated if signals stop flowing → detect and surface "data gap" warning
- Conflicting signals: roleplay shows improvement; call data shows decline → flag conflict; defer to most recent signal; surface both to manager

---

## Agent 2: Roleplay Simulation Agent

**Purpose:** Powers the AI buyer persona in roleplay sessions. Scores rep performance in real-time.

**Inputs:**
- Scenario definition (buyer persona, deal context, primary objection focus)
- Rep utterances (text or voice transcript)
- Skill rubrics (per scenario type)
- Rep's historical skill profile (to calibrate expectations)

**Reasoning Task:**
Play the role of a realistic, challenging buyer. Score each rep response against defined rubrics. Generate structured post-session debrief.

**Actions:**
- Generate buyer responses in character (LLM call per turn)
- Score rep utterances in real-time across skill dimensions
- Accumulate session-level scores
- Generate post-session debrief report

**Outputs:**
- Session transcript
- Per-utterance skill scores
- Overall session score per dimension
- Post-session debrief (structured: strengths / improvements / specific suggestions)
- Updated skill signals → sent to Readiness Intelligence Agent

**Human Approval Points:**
- Scenario must be reviewed and approved by enablement SME before deployment
- Post-session debrief visible to manager (manager can flag inaccurate AI feedback)

**Evaluation Criteria:**
- Buyer persona consistency (same scenario; same persona behavior)
- Scoring calibration (≥85% inter-rater reliability vs. human evaluator benchmark)
- Debrief specificity (feedback references specific rep utterances, not generic)

---

## Agent 3: Coaching Recommendation Agent

**Purpose:** Generates the weekly manager coaching queue with specific, evidence-backed coaching recommendations.

**Inputs:**
- Rep readiness scores (current and trend)
- Deal risk signals from CRM integration
- Manager coaching history (what was done; what improved)
- Skill score improvement rates (which areas are responding to coaching)
- Manager's available coaching time (configurable)

**Reasoning Task:**
Identify the highest-leverage coaching interventions for each manager's team this week. Prioritize reps by: skill gap severity × deal risk × coaching recency. Generate specific coaching actions (not generic advice).

**Actions:**
- Rank reps by coaching priority
- Generate coaching brief per prioritized rep
- Draft 1:1 agenda items
- Suggest roleplay assignment per rep

**Outputs:**
- Weekly coaching queue (ordered list with priority rationale)
- Coaching brief per rep (skill gap, evidence, suggested action, recommended roleplay)
- 1:1 prep document per scheduled coaching session

**Human Approval Points:**
- Manager reviews queue before it is visible to reps
- Manager can reorder, edit, or dismiss any coaching recommendation
- All overrides logged for calibration

---

## Agent 4: Content Recommendation Agent

**Purpose:** Surfaces the right content asset to the right rep at the right moment.

**Inputs:**
- Rep's current skill gap profile
- Active deal context (stage, buyer persona, competitive flags)
- Content asset metadata (type, topic, target persona, freshness score)
- Historical adoption data (which content was used by similar reps in similar deals)
- Rep's recent content consumption

**Reasoning Task:**
Match rep context (skill gap + deal context) to content assets using semantic retrieval + business rule filtering. Rank recommendations by relevance and past effectiveness.

**Actions:**
- Query content asset index (RAG retrieval)
- Apply business rules (freshness filter, role filter, exclude recently consumed)
- Rank and return top 3–5 recommendations with rationale

**Outputs:**
- Ranked content recommendations with match explanation
- Deal-specific content brief (top 3 assets for this specific deal)
- Enablement program module content suggestions

**Failure Modes:**
- No relevant content found: surface content gap alert to PMM; do not recommend irrelevant content
- Freshness conflict: most relevant asset is >18 months old → surface with freshness warning

---

## Agent 5: Skill Gap Detection Agent

**Purpose:** Proactively identifies emerging skill gaps before they become deal risks.

**Inputs:**
- All rep skill scores (current and trend)
- Deal pipeline data (upcoming high-value deals, stage distribution)
- Upcoming product launches or competitive changes
- Team segment benchmarks

**Reasoning Task:**
Identify skill gap patterns at individual, team, and organizational level. Predict which skills will be most critical in the next 30 days given pipeline shape and market context.

**Actions:**
- Compute team-level skill gap heatmap
- Identify reps below threshold on skills critical for current pipeline
- Predict emerging skill needs based on pipeline shape
- Surface gaps to enablement for program planning

**Outputs:**
- Team skill gap heatmap
- Individual gap alerts (for Readiness Intelligence Agent)
- Enablement planning recommendations ("Competitive positioning gap for 40% of Enterprise AEs; recommend targeted sprint before Q3")

---

## Agent 6: Program Optimization Agent

**Purpose:** Analyzes enablement program effectiveness and recommends improvements.

**Inputs:**
- Skill score improvement per program cohort
- Module-level completion and assessment performance
- Revenue outcomes for program graduates (ramp time, win rate)
- Rep feedback on program quality

**Reasoning Task:**
Identify which modules are producing skill improvement and which are not. Correlate program participation with downstream revenue outcomes. Recommend specific program changes.

**Outputs:**
- Program effectiveness report per cohort
- Low-impact module identification with evidence
- Recommended program modifications
- A/B test proposals for program variants

---

## Agent 7: Deal Readiness Agent

**Purpose:** Connects rep readiness to specific active deals and generates deal-level enablement recommendations.

**Inputs:**
- CRM deal data (stage, value, buyer persona, competitive flags, close date)
- Rep's skill profile (relevant dimensions for deal type)
- Content asset index
- Roleplay scenario library

**Reasoning Task:**
For each high-value active deal, identify the rep's relevant skill gaps, the content assets most likely to help, and the roleplay scenarios most relevant to the deal context.

**Outputs:**
- Deal readiness brief per deal (skill gap vs. deal requirements, recommended content, recommended roleplay)
- Manager alert for deals where rep readiness is below threshold
- Pre-call preparation brief for rep

---

## Agent 8: Executive Insight Agent

**Purpose:** Generates portfolio-level readiness summaries and strategic recommendations for CRO and VP Enablement.

**Inputs:**
- Team and organization readiness scores (current and trend)
- Quota attainment data
- Enablement program effectiveness data
- Industry benchmarks (where available)

**Outputs:**
- Weekly executive briefing (3-5 key insights)
- Board-ready readiness summary (monthly)
- Strategic enablement investment recommendations
- Readiness-to-revenue correlation analysis

---

## Example Workflows

### Weekly Manager Coaching Workflow

```
TRIGGER: Monday 8:00 AM
Coaching Recommendation Agent:
  → Reads all rep skill scores (Readiness Intelligence Agent store)
  → Reads deal risk signals (CRM integration)
  → Reads manager coaching history
  → Prioritizes coaching queue (top 3–5 reps)
  → Generates coaching brief per rep
  → Sends queue to manager inbox

Manager:
  → Reviews queue (5 min)
  → Selects reps for 1:1 this week
  → Coaching briefs auto-populate 1:1 agenda

Manager completes coaching:
  → Logs outcome (coached / snoozed / escalated)
  → Platform tracks coaching completion rate
  → Friday: manager receives weekly summary
```

### Low-Readiness Risk Detection Workflow

```
TRIGGER: Readiness Intelligence Agent detects rep score drop >15 points in 7 days

Readiness Intelligence Agent:
  → Identifies rep (Kavya Rao)
  → Diagnoses primary driver (competitive positioning decline)
  → Checks if manager was recently notified (no)

Coaching Recommendation Agent:
  → Generates emergency coaching brief
  → Escalates to manager (urgent flag)
  → Suggests: targeted competitive roleplay assignment

Deal Readiness Agent:
  → Checks rep's active deals
  → Identifies 2 competitive deals in pipeline
  → Generates deal-specific preparation brief

Manager receives:
  → Alert: "Kavya's readiness score dropped 18 points — competitive positioning primary driver. 2 competitive deals at risk."
  → Coaching brief with specific action
  → Deal preparation brief for both active competitive deals
```

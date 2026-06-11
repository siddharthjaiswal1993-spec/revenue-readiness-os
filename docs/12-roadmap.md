# Product Roadmap

---

## Roadmap Philosophy

Each phase builds the foundation for the next. Phase 1 creates the data infrastructure and trust. Phase 2 adds the AI intelligence layer. Phase 3 connects readiness to revenue. Phase 4 makes the system self-improving and agentic.

No phase is skipped. Customers who move through all four phases have a fundamentally different relationship with their revenue organization than when they started.

---

## Phase 1: Foundation
**Theme:** Build the intelligence infrastructure and establish baseline readiness data

**Objectives:**
- Get all reps and managers on the platform within 30 days of onboarding
- Establish baseline skill scores across all 10 dimensions for every rep
- Create the first personalized onboarding experience for a new cohort
- Give managers a single view of team readiness

**Features:**
- ✅ Rep profile with readiness score
- ✅ Skills assessment engine (10 dimensions, role-configurable)
- ✅ Content hub with basic usage tracking
- ✅ Learning path builder (manual + AI-suggested)
- ✅ Basic certification engine (assessment-based pass/fail)
- ✅ Team readiness dashboard (manager view)
- ✅ Onboarding program templates (30/60/90 day)
- ✅ SSO, RBAC, SCIM provisioning
- ✅ CRM read integration (deal context, rep assignment)

**Success Metrics:**
- % of reps with complete baseline skill profiles: ≥85%
- Manager weekly active usage: ≥70%
- Ramp program completion rate: ≥80%
- Time to first readiness score (new rep): ≤72 hours

**Risks:**
- Data quality: incomplete CRM data limits deal context enrichment
- Manager adoption: coaching habit change requires change management investment
- Assessment validity: initial skill assessments may not perfectly reflect real capability

**Dependencies:**
- CRM API access (read-only initially)
- SSO/SAML integration with customer identity provider
- Content ingestion from existing LMS or content repository

---

## Phase 2: Intelligence
**Theme:** Activate AI to personalize, simulate, and coach at scale

**Objectives:**
- Make AI roleplay the primary practice mechanism for all reps
- Replace generic coaching recommendations with specific, skill-grounded coaching briefs
- Activate continuous skill scoring that updates on every rep interaction
- Enable program effectiveness analysis for enablement team

**Features:**
- ✅ AI Roleplay engine (scenario builder, LLM buyer simulation, real-time scoring)
- ✅ Coaching Queue (AI-prioritized, skill-evidence-backed recommendations)
- ✅ Personalized learning path generation (AI-driven gap analysis)
- ✅ Continuous skill scoring (updates from roleplay, assessment, and call data)
- ✅ Call intelligence integration (import call data for skill signal extraction)
- ✅ Program effectiveness analytics (skill improvement by cohort and module)
- ✅ Content recommendation engine (matched to skill gap + deal stage)
- ✅ Manager coaching brief generator
- ✅ Readiness threshold alerts (critical rep risk notifications)
- ✅ Skill gap analytics dashboard

**Success Metrics:**
- Rep roleplay completion rate: ≥3 sessions/rep/month
- Manager coaching action completion: ≥80% of AI-prioritized actions weekly
- Skill score improvement: ≥15 point average improvement for Phase 2 active reps in 90 days
- AI coaching recommendation acceptance rate: ≥65%

**Risks:**
- AI roleplay quality: LLM buyer persona consistency requires ongoing prompt tuning
- Skill scoring reliability: multi-source signal fusion requires careful weighting
- Manager trust in AI coaching: if early recommendations miss, managers stop using the queue

**Dependencies:**
- Call intelligence integration (read-only API)
- Phase 1 skill baseline data (required for meaningful improvement tracking)
- Enablement team investment in scenario creation (quality of roleplay scenarios)

---

## Phase 3: Revenue Connection
**Theme:** Connect readiness data to deal data and prove enablement ROI

**Objectives:**
- Make deal-specific readiness recommendations available in rep workflow
- Give RevOps a clean attribution model connecting enablement activity to revenue metrics
- Enable PMM to track content effectiveness from creation to deal outcome
- Give CRO a portfolio-level readiness view that stands alongside pipeline data

**Features:**
- ✅ Deal Readiness module (CRM deal sync, readiness gap per deal, recommended actions)
- ✅ Win-rate correlation dashboard (readiness score bands vs. win rate)
- ✅ Ramp time analytics (time to first qualified opportunity by cohort)
- ✅ Content attribution (content assets used in won vs. lost deals)
- ✅ Executive insights dashboard (CRO-level view, board-ready exports)
- ✅ Quota attainment correlation (skill score bands vs. quota attainment %)
- ✅ Program ROI reporting (enablement investment vs. ramp time savings)
- ✅ CRM write integration (coaching actions visible in CRM activity log)
- ✅ Expansion motion support (customer-facing readiness programs)
- ✅ Competitive intelligence integration (competitive signal enrichment)

**Success Metrics:**
- Customers reporting measurable ramp time reduction: ≥70%
- Win-rate correlation coefficient achievable: ≥0.6 with 6+ months of data
- RevOps adoption of attribution dashboard: ≥80% of RevOps personas weekly
- Content attribution to won deals visible: ≥60% of content assets tracked

**Risks:**
- Attribution complexity: multi-touch, multi-variable attribution is methodologically challenging; oversimplified models damage trust
- CRM data quality: deal data quality affects correlation reliability
- Correlation vs. causation: must communicate clearly to executives that correlation is not proof of causation

**Dependencies:**
- Phase 2 skill data maturity (≥6 months of continuous scoring required for correlation analysis)
- CRM write access (to log enablement activities in deal records)
- Data warehouse access (for RevOps attribution analysis)

---

## Phase 4: Agentic Optimization
**Theme:** Build a self-improving readiness system that gets smarter with every interaction

**Objectives:**
- Enable autonomous, continuous readiness monitoring with proactive interventions
- Build program optimization loops that improve enablement quality without human reconfiguration
- Create governance frameworks for AI autonomy that enterprise customers can trust
- Establish competitive benchmarking across the platform's customer base

**Features:**
- ✅ Growth Sprint Planner (AI-generated enablement sprint plans)
- ✅ Autonomous program optimization (AI recommends module changes based on effectiveness data)
- ✅ Predictive ramp modeling (forecast time to readiness for new hires based on profile similarity)
- ✅ Proactive risk detection (AI flags reps before readiness drops below threshold)
- ✅ Cross-team skill benchmarking (anonymized peer comparison)
- ✅ AI governance dashboard (autonomy levels per agent, override rates, quality scores)
- ✅ Multi-model support (model provider abstraction; swap LLM backend without customer disruption)
- ✅ Agent configuration studio (customer-configurable agent behavior)
- ✅ Readiness API (external integrations; expose readiness scores to adjacent systems)
- ✅ Continuous A/B testing for content and program variants

**Success Metrics:**
- Customers with agents at Level 3+ autonomy: ≥40% at 18 months
- Program optimization recommendations accepted: ≥60%
- Predictive ramp model accuracy: mean absolute error ≤7 days for 30-day ramp predictions
- AI governance compliance: 100% of customer AI configurations within approved autonomy parameters

**Risks:**
- Over-automation: excessive AI autonomy without sufficient human oversight creates trust and compliance risk
- Model drift: underlying LLM changes can affect scoring consistency; requires continuous monitoring
- Feature complexity: Phase 4 surface area is large; prioritization discipline required to avoid scope creep

---

## Roadmap Timeline (Indicative)

| Phase | Estimated Duration | Key Milestone |
|-------|-------------------|--------------|
| Phase 1: Foundation | Months 1–6 | All reps have baseline skill scores; manager readiness dashboard live |
| Phase 2: Intelligence | Months 4–12 | AI roleplay active; coaching queue in use; continuous skill scoring |
| Phase 3: Revenue Connection | Months 10–18 | Win-rate correlation reportable; executive ROI dashboard live |
| Phase 4: Agentic Optimization | Months 16–24 | Autonomous agents active; program optimization loops running |

Phases overlap — Phase 2 development begins in Month 4 while Phase 1 is still stabilizing. Each phase graduation requires defined success metrics, not calendar completion.

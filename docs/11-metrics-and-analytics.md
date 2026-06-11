# Metrics and Analytics Framework

---

## North Star Metric

**Revenue Readiness Score — a composite 0–100 metric representing the average skill readiness of the revenue organization across all 10 skill dimensions, weighted by role and tenure.**

This is the metric the CRO reports, the metric that connects to win rate, and the metric that justifies the platform's existence. Everything else is supporting evidence.

---

## SaaS Health Metrics

### Activation
| Metric | Definition | Target |
|--------|-----------|--------|
| Time to first readiness score | Days from account creation to first rep skill score | ≤ 3 days |
| Rep activation rate | % of licensed reps with ≥1 skill signal in first 14 days | ≥ 80% |
| Manager activation rate | % of managers who view coaching queue in first 7 days | ≥ 85% |
| Time to first coaching action | Days from activation to manager's first coaching action | ≤ 7 days |

### Adoption
| Metric | Definition | Target |
|--------|-----------|--------|
| Weekly active reps (WAR) | Reps who complete ≥1 platform action per week | ≥ 65% of licensed seats |
| Weekly active managers (WAM) | Managers who open coaching queue ≥1× per week | ≥ 75% of licensed managers |
| Roleplay sessions per rep per month | Average monthly roleplay completions | ≥ 4 |
| Content recommendation acceptance | % of AI-recommended content opened | ≥ 35% |

### Retention and Expansion
| Metric | Definition | Target |
|--------|-----------|--------|
| Net Revenue Retention (NRR) | ARR retained + expansion / prior ARR | ≥ 120% |
| Logo retention | % of customers renewing at 12 months | ≥ 90% |
| Expansion seat growth | Average seat expansion per customer at renewal | +25% |
| NPS (manager) | Net Promoter Score from manager survey | ≥ 45 |
| NPS (rep) | Net Promoter Score from rep survey | ≥ 35 |

---

## Revenue Readiness Metrics

### Rep Readiness
| Metric | Definition | Target |
|--------|-----------|--------|
| Average readiness score | Mean composite score across all active reps | ≥ 70 by month 6 |
| Reps at critical risk (<40) | % of reps below critical threshold | < 5% |
| Readiness score improvement (90d) | Average score delta at 90 days for platform-active reps | +15 points |
| Certification completion rate | % of assigned certifications completed on time | ≥ 80% |

### Coaching Quality
| Metric | Definition | Target |
|--------|-----------|--------|
| Manager coaching coverage | % of at-risk reps coached each week | ≥ 80% |
| Coaching action completion rate | % of AI-prioritized actions completed within 7 days | ≥ 75% |
| Skill improvement post-coaching | Average score improvement in coached skill within 30 days | +8 points |
| Coaching consistency | SD of coaching action frequency across managers | < 0.3 (low variance) |

### Skill Development
| Metric | Definition | Target |
|--------|-----------|--------|
| Roleplay score improvement | Average improvement from attempt 1 to attempt 3 | +12 points |
| Weakest skill gap closure rate | % of reps who improve their lowest-scoring skill by ≥10 points in 60 days | ≥ 60% |
| Skill score trend | % of reps with improving trend at 90 days | ≥ 70% |
| New rep skill ramp rate | Days to reach readiness score ≥70 for new hires | ≤ 45 days |

---

## Business Outcome Metrics

### Revenue Impact
| Metric | Definition | Measurement Approach |
|--------|-----------|---------------------|
| Ramp time reduction | Days to first qualified opportunity for platform cohort vs. prior cohort | Cohort comparison; CRM integration |
| Win rate correlation | Pearson correlation: readiness score band vs. win rate | Minimum 6 months of data; 50+ reps |
| Sales cycle impact | Average deal duration for high-readiness (≥80) vs. low-readiness (<60) reps | CRM integration; deal data |
| Quota attainment correlation | Correlation: readiness score quartile vs. quota attainment % | Quarterly; requires compensation data integration |

### Enablement ROI
| Metric | Formula | Notes |
|--------|---------|-------|
| Ramp time savings value | (Avg ramp time reduction in weeks) × (Avg weekly AE OTE cost) × (New hires in period) | Quantifies the direct cost savings from faster ramp |
| Content investment efficiency | Won deals with platform content touches / Total won deals | Requires deal-level content attribution |
| Coaching leverage ratio | Skill improvement per hour of coaching time | Platform vs. pre-platform baseline |

---

## AI-Specific Metrics

### Quality and Accuracy
| Metric | Definition | Target |
|--------|-----------|--------|
| Roleplay scoring consistency | Inter-rater reliability: AI score vs. human evaluator | ≥ 85% |
| Coaching recommendation acceptance | % of AI coaching recommendations accepted (not dismissed/overridden) by managers | ≥ 65% |
| Content recommendation CTR | % of AI content recommendations clicked | ≥ 35% |
| Skill classification accuracy | Accuracy of AI skill scores vs. human evaluator benchmark on test set | ≥ 82% |
| Hallucination rate | % of AI coaching briefs containing factually incorrect claims | < 1% |

### Trust and Governance
| Metric | Definition | Target |
|--------|-----------|--------|
| Human override rate | % of AI recommendations overridden by a human | Monitor; flag if >20% for any agent |
| AI feedback rating | Average rep/manager rating of AI outputs (1–5) | ≥ 4.0 |
| Explainability usage | % of users who click "Why this score?" or "Why this recommendation?" | Monitor (signal of trust gap if >40%) |
| Bias audit pass rate | % of quarterly bias audits with no significant demographic disparities | 100% |

### Performance
| Metric | Definition | Target |
|--------|-----------|--------|
| Readiness score API latency (P99) | 99th percentile response time | ≤ 500ms |
| Roleplay response latency (P50) | Median time from rep input to AI buyer response | ≤ 2.5s |
| Cost per roleplay session | LLM API cost per completed roleplay session | ≤ $0.40 |
| Cost per AI coaching brief | LLM API cost per generated coaching brief | ≤ $0.15 |

---

## Reporting and Dashboards

| Audience | Dashboard | Cadence |
|---------|-----------|--------|
| CRO | Executive Insights: portfolio readiness, win-rate correlation, ROI summary | Weekly summary; real-time access |
| VP Enablement | Program effectiveness, skill trends, content adoption, cohort comparison | Daily access; weekly digest |
| Sales Manager | Coaching queue, team readiness heatmap, rep skill profiles | Daily (coaching queue); real-time (alerts) |
| AE/Rep | Personal readiness score, learning path, roleplay history | On-demand; daily prompt |
| RevOps | Data quality, integration health, attribution reports | Weekly |
| PMM | Content usage, adoption analytics, message consistency | On-demand; weekly digest |

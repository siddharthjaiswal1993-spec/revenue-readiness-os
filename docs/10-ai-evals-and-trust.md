# AI Evaluation and Trust Framework

---

## Philosophy

AI outputs in Revenue Readiness OS directly affect people's work and careers — coaching recommendations, readiness scores, and skill assessments are acted on by managers and experienced by reps. The bar for accuracy, fairness, and explainability is higher than a search engine or a content recommender.

This framework defines how every AI output is evaluated before deployment, monitored in production, and improved over time.

---

## Evaluation Domains

### 1. Roleplay Scoring Accuracy

**What we measure:** Does the AI correctly assess rep performance across skill dimensions?

**Offline eval:**
- Human expert panel rates 200 roleplay sessions across all 10 skill dimensions
- AI scores compared against human ratings
- Target: Pearson correlation ≥ 0.80 per skill dimension
- Acceptable inter-rater reliability among human raters ≥ 85% (Cronbach's alpha)

**Online eval:**
- Manager feedback rate on AI roleplay scores (thumbs up/down)
- Target: ≥ 85% positive feedback on session debrief quality
- Monitor: distribution of AI scores vs. human evaluator benchmarks; flag drift >5 points

**Red-team scenarios:**
- Session where rep gives deliberately mediocre answers (should score 40–55)
- Session where rep refuses to engage (should not score >30; should surface warning)
- Session where rep gives excellent answers with a different communication style (test for style bias)

---

### 2. Coaching Recommendation Quality

**What we measure:** Are coaching recommendations specific, accurate, and actionable?

**Offline eval:**
- Panel of experienced sales managers rates 100 AI coaching briefs
- Rubric: specificity (1–5), accuracy (1–5), actionability (1–5), evidence grounding (1–5)
- Target: average score ≥ 4.0 across all dimensions

**Online eval:**
- Manager acceptance rate (coaching action taken vs. dismissed) — target ≥ 65%
- Manager rating on 5-point scale post-action — target ≥ 4.0
- Override rate — monitor; flag if >20% for any agent version

**Hallucination detection:**
- Every coaching brief references specific data points (roleplay score, assessment result)
- Automated check: every cited evidence claim must be traceable to a structured data record
- Target: 0% of briefs with unverifiable evidence citations

---

### 3. Skill Classification Accuracy

**What we measure:** Is the AI correctly classifying which skill each roleplay response demonstrates?

**Offline eval:**
- 300 annotated roleplay response pairs: human skill classification vs. AI
- Target: F1 score ≥ 0.82 per skill category
- Test for confusion: does AI confuse "objection handling" with "closing discipline"?

**Calibration:**
- AI confidence scores should be calibrated: when AI says 85% confidence, it should be right 85% of the time
- Reliability diagram generated quarterly

---

### 4. Content Recommendation Relevance

**What we measure:** Are recommended content assets actually relevant to the rep's context?

**Offline eval:**
- 100 rep context + deal scenario pairs rated by enablement team for recommendation relevance
- Target: precision@3 ≥ 0.75 (at least 2 of top 3 recommendations rated relevant)

**Online eval:**
- Content recommendation click-through rate — target ≥ 35%
- Content completion rate after recommendation — target ≥ 50%
- Negative feedback rate ("this isn't helpful") — target < 10%

---

### 5. Readiness Score Explainability

**What we measure:** Can users understand why a rep has a given score?

**Qual eval:**
- User testing: 10 managers shown a readiness score explanation; asked to explain it in their own words
- Target: 8/10 managers correctly interpret the score and its primary drivers

**Quant eval:**
- "Why this score?" click rate — monitor
- Explanation rating (thumbs up/down) — target ≥ 80% positive
- Support tickets citing confusion about score calculation — target < 1% of WAU

---

### 6. Bias and Fairness

**What we measure:** Does the AI treat reps equitably regardless of gender, name, communication style, or tenure?

**Quarterly bias audit:**
- Split AI skill scores by available demographic proxies (name-based inferred gender, tenure, team)
- Test for statistically significant score disparities not explained by performance differences
- Target: no demographic group consistently scores >5 points above or below performance-equivalent peers

**Communication style testing:**
- Test roleplay scoring with responses in formal vs. informal register
- Test with responses using different vocabulary patterns (direct vs. elaborate communication style)
- Validate that equivalent answers score equivalently regardless of style

**Escalation:**
- Any detected bias ≥ 5 points → halt agent output; escalate to AI governance team
- Root cause analysis within 14 days; remediation within 30 days

---

## Human Review Workflows

### Standard Review (weekly)
- Random sample of 20 coaching briefs reviewed by enablement team lead
- Random sample of 10 roleplay debrief reports reviewed by senior sales manager
- Any rating < 3/5 triggers investigation

### Threshold Review (triggered)
- Any agent override rate > 20% → triggered review within 48 hours
- Any hallucination detected in production → immediate agent pause; review within 24 hours
- Any customer-escalated AI inaccuracy complaint → review within 2 business days

### Quarterly Model Review
- Full evaluation suite re-run on latest model version
- Bias audit
- Calibration check
- Human panel rating refresh
- Output: AI Governance Report distributed to CTO, Head of AI, Customer Success

---

## Guardrails

### Input guardrails
- Roleplay inputs scanned for: PII (real customer names), competitor disparagement, inappropriate content
- Content uploaded to platform scanned before ingestion
- User-generated scenario descriptions reviewed before activation

### Output guardrails
- All LLM outputs checked for: inappropriate language, PII exposure, factual claims about real companies
- Coaching briefs checked: does cited evidence exist in the database?
- Readiness scores bounded: cannot be negative, cannot exceed 100, cannot change >30 points in 24 hours without human review

### Escalation logic
- AI output confidence < 0.6 → output flagged; human review required before surfacing
- AI score anomaly (rep score drops >20 points in 7 days) → manager notification + human review before critical alert fires
- Any AI output used for certification grade must have confidence > 0.75 OR human review

---

## Feedback Loops

Every AI output has a feedback mechanism:
- Thumbs up/down on coaching briefs, content recommendations, roleplay debriefs
- Override logging with reason capture
- Free-text feedback option ("this recommendation was wrong because...")

Aggregated feedback reviewed:
- Weekly: top-level acceptance and rejection rates
- Monthly: theme analysis of negative feedback
- Quarterly: model recalibration using high-confidence feedback data

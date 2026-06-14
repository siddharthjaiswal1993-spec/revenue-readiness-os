# AI Product Judgment — Revenue Readiness OS

---

## Decision 1: AI roleplay is the landing wedge, not a supplementary feature

**What:** AI-powered buyer conversation simulation is the primary product surface that new users experience first — not a feature within a readiness dashboard.

**Why:** The readiness score requires data before it is meaningful. Certifications require content before they are valuable. The coaching queue requires skill data before it can prioritise. Roleplay is the only capability that delivers value immediately, on the first session, without any prior data.

An AE who does one roleplay session gets immediate, specific feedback on their discovery technique. That feedback is valuable independently of whether the platform has 90 days of their skill data. And that session produces the first data point in their readiness profile.

Roleplay as the landing wedge solves both the activation problem (immediate value) and the data bootstrapping problem (first signal for the scoring model).

**What this reflects:** Wedge design should optimise for standalone value on day one, not peak value after full adoption. The feature that creates an "aha" moment before the platform has any data about the user is the right wedge.

---

## Decision 2: Coaching recommendations must be specific, not directional

**What:** The coaching recommendation format is: who, on what specific skill, with what specific evidence, and what specific action. Not: "Alex needs coaching on objection handling."

**Why:** Directional coaching recommendations ("improve discovery questions") are ignored by managers because they are already obvious and provide no new information. Specific recommendations ("Alex's last three roleplay sessions scored below threshold on handling pricing pushback — here are two specific scenarios to work through in your next 1:1, and here are the deals where this is most likely to surface this week") provide new information and a clear action.

The specificity is what makes managers act. Managers have full calendars; an action item that requires no research to act on gets done. An action item that requires interpretation gets deferred.

**What this reflects:** AI recommendations should be actionable as presented — the human's job is judgment, not research. If the human has to do significant work to figure out what to do with an AI recommendation, the AI has not done its job.

---

## Decision 3: Roleplay scoring is criteria-based, not holistic

**What:** Each roleplay session is scored on defined criteria (discovery quality, objection handling, value articulation, close readiness) with a rubric for each, not an overall "performance" score.

**Why:** A holistic score (7/10) is not actionable. A criteria-based score (discovery: 8, objection handling: 4, value articulation: 6) tells the rep exactly where to focus, tells the manager exactly what to coach, and tells the system exactly what to surface in the learning path.

The criteria design is a product decision: which dimensions of sales conversation quality are important enough to track, and what does "good" look like on each? This design shapes what the platform can measure and improve over time.

**What this reflects:** AI scoring rubrics are product design work. The categories and thresholds determine what the platform optimises for and what it signals to users. This is not a model training decision — it is a product strategy decision that happens to have model training implications.

---

## Decision 4: Readiness score is explainable by design

**What:** Every readiness score shows the 10 sub-dimensions, the signal sources contributing to each, and the trend over time. The composite score cannot be surfaced without the explanation.

**Why:** A black-box readiness score creates two problems. First, it is not actionable — "your score dropped to 62" tells a rep nothing about what to do differently. Second, it is not trusted — managers and reps will not act on a score they cannot understand.

Explainability is enforced at the product level, not the model level. The product renders the explanation every time the score is shown. This is simpler than building a post-hoc explanation system and more reliable.

**What this reflects:** Explainability in AI products is a UX requirement, not just a trust-and-safety requirement. When AI outputs drive user behaviour (a rep choosing which skill to work on, a manager deciding who to coach), the user needs to understand why before they can choose to act.

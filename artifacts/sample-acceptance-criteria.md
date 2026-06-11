# Sample Acceptance Criteria

---

## Feature: Readiness Score Calculation

**Story:** Readiness score is computed from skill signals and displayed per rep.

**Acceptance Criteria:**

**Given** a rep has at least 3 skill signals (from any combination of: roleplay session, assessment, call intelligence)  
**When** the Readiness Intelligence Agent runs  
**Then** a composite readiness score (0–100) is computed using the formula:
```
ReadinessScore = Σ(skill_score[i] × weight[i]) × recency_decay_factor × role_completion_factor
```
Where:
- `weight[i]` is the configured weight for skill dimension i (weights sum to 1.0)
- `recency_decay_factor` = 0.9 if most recent signal is >30 days old; 1.0 otherwise
- `role_completion_factor` = (assigned skills with ≥1 signal / total assigned skills)
- Score is rounded to nearest integer; bounded [0, 100]

**Given** a rep has no signals in any skill dimension  
**Then** their score displays as "—" (not scored) and they are excluded from team averages

**Given** a score update occurs  
**Then** the new score appears in the UI within 1 hour

**Given** a score changes by more than 15 points in 7 days  
**Then** a manager notification is triggered and the change is flagged for human review

---

## Feature: AI Roleplay Session

**Story:** Rep completes a roleplay session and receives a debrief.

**Acceptance Criteria:**

**Given** a rep clicks "Start Session" on a scenario  
**Then** the roleplay interface loads within 5 seconds  
**And** the AI buyer sends an opening message within 3 seconds

**Given** the rep submits a message  
**Then** the AI buyer responds within 3 seconds  
**And** the response is contextually relevant to the rep's message

**Given** the session is completed  
**Then** a debrief report is generated within 30 seconds  
**And** the report includes:
- Overall session score (0–100) with tier label
- Per-skill scores for each skill dimension relevant to the scenario
- At minimum 2 strengths with specific transcript evidence
- At minimum 2 development areas with specific transcript evidence and a concrete suggestion
- AI confidence score for the overall rating

**Given** the AI confidence for the overall rating is below 0.6  
**Then** the debrief is flagged "Requires Review" and the rep is informed the score is pending manager confirmation

**Given** a rep completes a session  
**Then** the skill signals from that session are incorporated into the rep's readiness score within 24 hours

---

## Feature: Coaching Queue Generation

**Story:** Manager's coaching queue is populated each week with prioritized actions.

**Acceptance Criteria:**

**Given** it is 8am Monday local time for a manager  
**When** the Coaching Recommendation Agent runs  
**Then** the manager's queue contains:
- All Critical actions (skill score < 40 or significant decline)
- High priority actions capped at 5 per rep
- No more than 3 Medium priority actions per rep
- All actions have: rep name, skill dimension, evidence reference (specific signal ID), suggested coaching approach, priority level

**Given** a rep has no new signals since the last queue generation  
**Then** existing open actions remain in queue; no duplicate actions are created

**Given** an action has been open for >14 days without manager interaction  
**Then** the action escalates one priority level (Medium → High; High → Critical)  
**And** a notification is sent to the manager

**Given** a manager dismisses an action with reason "already addressed"  
**Then** the action is removed from the active queue  
**And** the dismissal is logged with the reason  
**And** a new action for the same rep + skill is not re-generated for 7 days unless new signals arrive

---

## Feature: Content Freshness Scoring

**Story:** Content freshness score decays over time and triggers admin notifications.

**Acceptance Criteria:**

**Given** a content asset is uploaded  
**Then** it receives a freshness score of 100

**Given** the asset has not been updated  
**Then** freshness decays on the following schedule:
- Days 0–30: score = 100
- Days 31–60: score = 100 − (days_since_update − 30) × 1.5
- Days 61–90: score = 55 − (days_since_update − 60) × 1.0
- Days 91+: score = 25 (floor; does not decay further)

**Given** a content asset freshness score falls below 40  
**Then** the asset is marked as "Stale" in the UI with a visual indicator  
**And** the enablement admin receives a weekly notification listing stale assets

**Given** an asset is updated (new version uploaded)  
**Then** the freshness score resets to 100  
**And** the "Stale" flag is removed  
**And** reps who bookmarked the asset are notified of the update

---

## Feature: Manager Override Tracking

**Story:** Manager overrides of AI recommendations are logged and analyzed.

**Acceptance Criteria:**

**Given** a manager dismisses a coaching recommendation  
**Then** the override is logged with: manager_id, rep_id, skill_id, action_id, reason_code, timestamp

**Given** a manager's override rate for any agent exceeds 20% over a rolling 30-day window  
**Then** an alert is sent to the enablement admin: "[Manager name]'s override rate is 23% — coaching recommendations may need review"

**Given** the AI Governance team reviews an override pattern  
**Then** they can annotate the review: root cause identified / prompt adjustment needed / expected pattern

**Given** a manager accepts a coaching action (marks complete)  
**Then** this is logged as a positive signal for the AI's recommendation pattern

**Given** 30+ overrides are collected for a specific skill + evidence combination  
**Then** the pattern is flagged for the next quarterly model review

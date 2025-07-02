# ✅ Non-MCQ Page Layout and Functional Unification Task Specification

## 🎯 Current Goal

Unify layout and styles for all non-MCQ game pages (Addition / Division / Fraction / Multiplication) as follows:

---

## ✅ Layout and Style Objectives:

1. **Overall Page Layout:**
   - Centered alignment.
   - Page height should auto-adjust to content. No fixed height.
   - Main container styles should be unified using `SimpleGameLayout.module.css`.

2. **Score Display:**
   - Unified "yellow rounded bubble box" style, referencing the current Addition page effect.
   - All non-MCQ pages should have a Score box (even pages that didn't have it before).

3. **Input + Submit Button Area:**
   - Extract into a reusable `<AnswerForm />` component.
   - All non-MCQ pages should use this shared component. No duplicated layout code.

4. **Feedback Block (Correct / Incorrect):**
   - Text style, color, position must be unified, following the current Addition page.

5. **Next Question Button:**
   - Fixed style, width, and font size.
   - Button size must remain consistent across correct and incorrect states (no size jumps).

6. **Disabled and Hover States:**
   - All buttons (Submit / Next Question) should have a consistent disabled state and hover effect.
   - Disabled state uses `.disabledButton`.
   - Hover state uses `.button:hover` and `.nextButton:hover`.

---

## ✅ About the Explanation Block (Important):

**Decision:**

- **For the current phase:**  
Remove all Explanation blocks from non-MCQ pages, including Division.  
(Reason: To avoid inconsistent explanation quality. Focus first on UI and functional consistency.)

- **For future phases:**  
AI-generated Explanation functionality will be planned as a separate future task and reintroduced globally for all non-MCQ pages.

---

## ✅ Code-Level Requirements:

1. **Remove Inline Styles:**
   - Migrate all inline styles into the CSS module files to keep JSX files clean.

2. **Extract Reusable Components:**
   - At minimum, extract an `<AnswerForm />` component (Input + Submit area).
   - Optionally, consider extracting Feedback or ScoreBox components if appropriate later.

---

## ✅ Next Steps:

1. Complete layout and style unification for Addition / Division / Fraction / Multiplication pages.
2. After completion, wait for user decision to deploy on Vercel and push to GitHub.
3. AI Explanation feature to be discussed and implemented in a future phase.

### ✨ Non-MCQ Game Page Unification

All core math game pages (Addition, Division, Fraction, Multiplication) now share a fully unified layout and style:

- **Consistent, Centered Layout:** Each game uses a vertically stacked, center-aligned card for a clean and modern look.
- **Unified Score Display:** A yellow "Score" bubble appears at the top of every game card.
- **Reusable Answer Form:** All input and submit button logic is handled by a shared `<AnswerForm />` component for code and style consistency.
- **Unified Feedback & Navigation:** Feedback messages and the "Next Question" button are always centered, with fixed button width and consistent states.
- **No Inline Styles:** All visual styles are managed via CSS modules for maintainability and scalability.
- **Explanation Block:** Temporarily removed for this phase; will be reintroduced in a future update.

#### Example Unified Layout

- The new **Word Problem Game** (2025-07-01) also follows this unified layout and reuses the shared `<AnswerForm />` component for free-form numeric input.
- The new **Multiplication Word Problem Game** (2025-07-02) also follows this unified layout and reuses the shared `<AnswerForm />` component for free-form numeric input.

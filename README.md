# BrightMind

> “BrightMind is a playful and smart digital playground for children.
> Designed by a father for his daughter, it aims to bring joyful learning
> to every curious child, combining education with delight.”

---

## 🤝 Collaboration Model

| Role      | Responsibility                                                                 |
|-----------|--------------------------------------------------------------------------------|
| **Me** (Product Owner & Learner) | Decide what to build, define feature goals, track learning milestones |
| **ChatGPT** (Technical Mentor)   | Provide technical direction, feature docs, learning strategies, feedback |
| **Cursor** (Coding Assistant)    | Generate, edit, and refactor code and docs based on our plans           |

**Workflow Philosophy:**  
This project follows a **learning-first, gradual-iteration approach** documented in `LEARNING_HISTORY.md`. Each new feature introduces new technical concepts while building on previous knowledge. Periodic refactoring and unification ensure steady progress while reinforcing learning.

**Collaboration Model:**  
- **Product Owner**: Defines feature goals and learning priorities
- **ChatGPT**: Provides technical direction, roadmaps, and task instructions
- **Cursor**: Implements features and maintains project documentation

---

## 📚 Documentation Structure

| File                 | Purpose                                               |
|----------------------|-------------------------------------------------------|
| `README.md`          | Project summary, technical structure, feature roadmap |
| `LEARNING_HISTORY.md`| Learning methodology, development workflow, collaboration process (internal) |
| `/docs/`             | Detailed specs for specific features (e.g., Non-MCQ layout, MCQ behavior) |

**Note:** The learning methodology and workflow philosophy in `LEARNING_HISTORY.md` guide all development decisions and collaboration patterns.

---

## 📘 Project Summary

**Mission:**  
Create an interactive web platform where 7–12 year old children (starting with my daughter) can **play, learn, and grow** through fun, personalized educational games and exercises.

---

## ✅ What's Built So Far

| Feature                       | Description                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| ✅ **Live Website**            | Deployed to Vercel at a custom domain (`vercel.michnardo.com`) |
| ✅ **Next.js Foundation**      | React-based framework with serverless deployment support       |
| ✅ **Addition Game**           | Real-time addition/subtraction/multiplication quiz             |
| ✅ **Subtraction Game**        | Multi-digit subtraction practice with borrowing, instant feedback and clean UI. |
| ✅ **Multiplication Game**     | Fast-paced multiplication practice game with instant feedback and clean UI. |
| ✅ **Addition MCQ**           | Multiple-choice addition quiz with 4 answer choices, instant feedback, star rewards, animated checkmark/cross, and sound effects for correct/incorrect answers. |
| ✅ **Division Game**           | Practice division with instant feedback and explanations. When a wrong answer is given, the game explains why and shows how to solve it. |
| ✅ **Division MCQ**           | Multiple-choice division quiz with 4 answer choices, 5-second countdown timer, star rewards, animated feedback, and sound effects for correct/incorrect/timeout. |
| ✅ **Fraction Game**           | Free-form fraction addition and comparison game with instant feedback and clear explanations. |
| ✅ **Fraction Addition MCQ**   | Multiple-choice fraction addition quiz with 4 answer choices, 5-second countdown timer, star rewards (persisted with LocalStorage), animated feedback, sound effects, and CSS Modules for styling. <br> <strong>Note:</strong> Feedback animation will be standardized across MCQ games using a shared <code>animations.module.css</code> pop-in effect. |
| ✅ **Fraction Comparison MCQ** | Multiple-choice fraction comparison quiz with 4 answer choices, 5-second countdown timer, star rewards, animated feedback, sound effects, and CSS Modules for styling. |
| ✅ **Multiplication MCQ**     | Multiple-choice multiplication quiz with 4 answer choices, 10-second countdown timer, dynamic difficulty scaling, star rewards, animated feedback (using <code>animations.module.css</code>), sound effects, and CSS Modules for styling. |
| ✅ **Subtraction MCQ**         | Multiple-choice subtraction quiz with 4 answer choices, 10-second countdown timer, star rewards (persisted with LocalStorage), animated feedback, sound effects, and CSS Modules for styling. |
| ✅ **Word Problem Game**       | Interactive word problem game with real-world math scenarios, free-form numeric input, instant feedback, and unified layout. |
| ✅ **Version Control + CI/CD** | GitHub + Vercel for source tracking and auto-deployments       |
| ✅ **Custom Domain with CDN**  | Cloudflare-backed domain for scalability and performance       |

### ✅ Non-MCQ Page Layout and Functional Unification — Completion Summary

### 📄 Layout Standard Reference

All finalized layout and style guidelines for non-MCQ pages are documented in:

`/docs/Non-MCQ_Page_Layout_Unification.md`

Whenever future layout-wide changes happen, this file must be updated together with the code.

## 🎯 Goal

Unify layout and styles for all non-MCQ game pages (Addition / Division / Fraction / Multiplication) for a seamless, professional, and maintainable user experience.

---

## ✅ What's Now Standardized

1. **Overall Page Layout:**
   - Centered, vertically stacked card layout.
   - Page height auto-adjusts to content.
   - Main container styles unified via `SimpleGameLayout.module.css`.

2. **Score Display:**
   - Unified "yellow rounded bubble box" style at the top of every game card.

3. **Input + Submit Button Area:**
   - All non-MCQ pages use a shared `<AnswerForm />` component (input and submit in a single row).

4. **Feedback Block (Correct / Incorrect):**
   - Unified text style, color, and position for feedback messages.

5. **Next Question Button:**
   - Fixed style, width, and font size.
   - Button size remains consistent across all states.

6. **Disabled and Hover States:**
   - All buttons (Submit / Next Question) use `.disabledButton` and unified hover styles.

7. **No Inline Styles:**
   - All styles are managed via CSS modules.

8. **Explanation Block:**
   - Temporarily removed from all non-MCQ pages for this phase.

9. **Feedback Animation (MCQ Games):**
   - <strong>Currently only Multiplication MCQ</strong> uses a shared pop-in animation for feedback messages, implemented via <code>animations.module.css</code> and the <code>.feedbackAnimated</code> class. This will be standardized across all MCQ pages in the future.

---

## ✅ Code-Level Improvements

- All inline styles removed.
- `<AnswerForm />` extracted and reused.
- Naming and structure are consistent across all non-MCQ pages.

---

## ✅ Next Steps

- Review and test all non-MCQ pages for visual and interaction consistency.
- Deploy after final review.
- Plan for future reintroduction of AI-generated explanations.

---

_Last updated: [07/01/2025]_

---

## 🔧 Technical Foundation

```
hello-vercel/
├── app/
│   ├── page.js              ← Homepage with game links
│   ├── addition/            ← Addition game
│   │   └── page.js
│   ├── subtraction/         ← Subtraction game (multi-digit with borrowing)
│   │   └── page.js
│   ├── subtraction-mcq/     ← Subtraction MCQ (multiple-choice, timer, stars, CSS Modules)
│   │   ├── page.js
│   │   └── SubtractionMCQ.module.css
│   ├── addition-mcq/        ← Addition MCQ (multiple-choice addition)
│   │   └── page.js
│   ├── division/            ← Division game (with explanations)
│   │   └── page.js
│   ├── fraction/           ← Fraction game (free-form addition/comparison)
│   │   └── page.js
│   ├── fraction-addition-mcq/    ← Fraction Addition MCQ (multiple-choice, timer, persistent stars, CSS Modules)
│   │   ├── page.js
│   │   └── FractionAdditionMCQ.module.css
│   ├── fraction-comparison-mcq/  ← Fraction Comparison MCQ (multiple-choice fraction comparison, timer, stars, CSS Modules)
│   │   ├── page.js
│   │   └── FractionComparisonMCQ.module.css
│   ├── division-mcq/        ← Division MCQ (multiple-choice division, countdown)
│   │   └── page.js
│   ├── multiplication/     ← Multiplication game
│   │   └── page.js
│   ├── multiplication-mcq/ ← Multiplication MCQ (multiple-choice, dynamic difficulty, animation)
│   │   ├── page.js
│   │   └── MultiplicationMCQ.module.css
│   ├── styles/
│   │   └── animations.module.css
│   ├── word-problem/         ← Word Problem Game (real-world math scenarios, free-form input)
│   │   └── page.js
├── public/                  ← Static assets (e.g. images, sound files for feedback)
├── next.config.mjs          ← Next.js config
├── package.json             ← Project dependencies
```

---

## 🌱 Roadmap

### Phase 1: Educational Game Expansion
- 📐 Math: Addition, Subtraction (multi-digit with borrowing), Addition MCQ (multiple-choice), Subtraction MCQ (multiple-choice, timer, stars), Division MCQ (multiple-choice, countdown mode), Fraction Game (free-form addition/comparison), Fraction Addition MCQ (multiple-choice, timer, persistent stars), Fraction Comparison MCQ (multiple-choice, timer, stars), Division (with instant feedback and explanations for mistakes), **Word Problem Game (real-world scenarios, free-form input)**, word problems
- ✍️ English: Sight words, spelling, reading comprehension
- 🌍 Geography: Flags, capitals, map games
- 🎨 Art: Drawing pad, shape recognition

### Phase 2: User Experience
- 🎯 Level selection (Easy / Medium / Hard / Extra-Hard)
- 🧠 Score tracking with progress
- 🎵 Sound effects, animations
- 🌙 Light/Dark mode

### Phase 3: Multi-User Support
- 👧 Profiles (e.g., Chloe, friends)
- 📊 Store scores/history per user (localStorage at first)
- ⏱ Timed challenges, leaderboards

### Phase 4: Content & Community
- 📚 Parent dashboard
- 📥 Downloadable worksheets
- 🧑‍🏫 Teacher/parent collaboration
- ✨ User-generated quizzes

---

## 🚀 Technical Tips

| Area             | Recommendation                                                  |
| ---------------- | --------------------------------------------------------------- |
| **Routing**      | Use Next.js App Router (already doing this!)                    |
| **Styling**      | Consider Tailwind CSS or CSS modules                            |
| **Data Storage** | Start with `localStorage`, then upgrade to Firebase or Supabase |
| **Auth**         | Add basic login if user profiles are needed                     |
| **CI/CD**        | Already set with GitHub + Vercel                                |
| **Versioning**   | Use Git branches to test new features                           |
| **Testing**      | Add simple unit tests for game logic as it grows                |

---

## 🚧 Current Development Focus

- All non-MCQ math games (Addition, Division, Fraction, Multiplication) now use a unified layout, style, and code structure.
- Next: Review, test, and deploy the unified experience.

---

## 📝 Documentation Process

- After every feature update, this README is revised and reviewed with ChatGPT to ensure alignment, progress tracking, and learning goal documentation.
- Cursor assists in drafting, editing, and committing both code and documentation based on ChatGPT's guidance and my decisions.

## 🙌 Credits
Created by Michnardo for My daughter Coco and all 
curious kids.

# BrightMind

> “BrightMind is a playful and smart digital playground for children.
> Designed by a father for his daughter, it aims to bring joyful learning
> to every curious child, combining education with delight.”

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
| ✅ **Addition MCQ**           | Multiple-choice addition quiz with 4 answer choices, instant feedback, star rewards, animated checkmark/cross, and sound effects for correct/incorrect answers. |
| ✅ **Division Game**           | Practice division with instant feedback and explanations. When a wrong answer is given, the game explains why and shows how to solve it. |
| ✅ **Division MCQ**           | Multiple-choice division quiz with 4 answer choices, 5-second countdown timer, star rewards, animated feedback, and sound effects for correct/incorrect/timeout. |
| ✅ **Fraction Game**           | Free-form fraction addition and comparison game with instant feedback and clear explanations. |
| ✅ **Fraction MCQ**           | Multiple-choice fraction addition quiz with 4 answer choices, 5-second countdown timer, star rewards (persisted with LocalStorage), animated feedback, sound effects, and CSS Modules for styling. |
| ✅ **Version Control + CI/CD** | GitHub + Vercel for source tracking and auto-deployments       |
| ✅ **Custom Domain with CDN**  | Cloudflare-backed domain for scalability and performance       |

---

## 🔧 Technical Foundation

```
hello-vercel/
├── app/
│   ├── page.js              ← Homepage with game links
│   ├── addition/            ← Addition game
│   │   └── page.js
│   ├── addition-mcq/        ← Addition MCQ (multiple-choice addition)
│   │   └── page.js
│   ├── division/            ← Division game (with explanations)
│   │   └── page.js
│   ├── fraction/           ← Fraction game (free-form addition/comparison)
│   │   └── page.js
│   ├── fraction-mcq/        ← Fraction MCQ (multiple-choice, timer, persistent stars, CSS Modules)
│   │   └── page.js
│   │   └── FractionMCQ.module.css
│   ├── division-mcq/        ← Division MCQ (multiple-choice division, countdown)
│   │   └── page.js
├── public/                  ← Static assets (e.g. images, sound files for feedback)
├── next.config.mjs          ← Next.js config
├── package.json             ← Project dependencies
```

---

## 🌱 Roadmap

### Phase 1: Educational Game Expansion
- 📐 Math: Addition, Addition MCQ (multiple-choice), Division MCQ (multiple-choice, countdown mode), Fraction Game (free-form addition/comparison), Fraction MCQ (multiple-choice, timer, persistent stars), Division (with instant feedback and explanations for mistakes), word problems
- ✍️ English: Sight words, spelling, reading comprehension
- 🌍 Geography: Flags, capitals, map games
- 🎨 Art: Drawing pad, shape recognition

### Phase 2: User Experience
- 🎯 Level selection (Easy / Medium / Hard)
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

## 🙌 Credits

Created by Michnardo for My daughter Coco and all curious kids.
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
| ✅ **Division Game**           | Practice division with instant feedback and explanations. When a wrong answer is given, the game explains why and shows how to solve it. |
| ✅ **Fractions Game**          | Practice fraction addition and comparison with instant feedback and clear explanations for mistakes. |
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
│   ├── division/            ← Division game (with explanations)
│   │   └── page.js
│   ├── fractions/           ← Fractions game (addition & comparison)
│   │   └── page.js
├── public/                  ← Static assets (e.g. images)
├── next.config.mjs          ← Next.js config
├── package.json             ← Project dependencies
```

---

## 🌱 Roadmap

### Phase 1: Educational Game Expansion
- 📐 Math: Addition, Division (with instant feedback and explanations for mistakes), Fractions (addition & comparison with explanations), word problems
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

Created by Michnardo for My daughter Chloe and all curious kids.
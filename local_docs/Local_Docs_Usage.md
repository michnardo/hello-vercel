
# 📂 local_docs/ — Local-Only Documentation and Notes (Never pushed to GitHub)

This folder is a dedicated space for storing all **local-only** project notes, learning records, chat logs, and internal documents.  
**Nothing in this folder should ever be committed to GitHub or any public repository.**

---

## ✅ Folder Purpose

- Track personal learning progress and strategies.
- Archive important ChatGPT and Cursor conversation history.
- Maintain reusable chat opening templates.
- Store any internal notes, ideas, or development experiments not intended for external sharing.

---

## ✅ Current Directory Structure

```
local_docs/
├── Local_Docs_Usage.md              # This usage guide for local_docs
├── LEARNING_HISTORY.md              # Personal learning process, project growth tracking
├── Chat_Opening_Templates.md        # Opening scripts for starting new ChatGPT or Cursor chats
├── ChatGPT_Long_Chat_Strategy.md    # How to manage long ChatGPT conversations without crashes
├── Cursor_Long_Chat_Tips.md         # Cursor-specific chat workflow and crash prevention tips
├── ChatGPT_History/                 # Archived important ChatGPT chats (organized by date or topic)
├── Cursor_History/                  # Archived important Cursor chats (organized by date or topic)
└── Other_Notes/                     # Freeform notes, ideas, inspirations
```

---

## ✅ File Naming Rules

| Type                      | Example Filename                          |
|---------------------------|------------------------------------------|
| ChatGPT Session Archive   | `2025-06-30_AI_Unification_Plan.md`       |
| Cursor Session Archive    | `2025-06-30_Cursor_FractionMCQ_Update.md`|
| Idea or Note              | `2025-06-30_MathGame_Ideas.md`           |

---

## ✅ Git Ignore Rule

The entire `/local_docs/` folder is excluded from Git tracking.

Check `.gitignore`, make sure this line exists:

```
/local_docs/
```

---

## ✅ How We Manage Updates to This Folder

- **Any time folder structure or naming conventions change**, this `Local_Docs_Usage.md` file must be updated.
- Internal folders like `/ChatGPT_History/`, `/Cursor_History/`, and `/Other_Notes/` should remain consistent with this guideline.
- When starting new types of documents, update this guide first.

---

## ✅ Relation to README.md and Public Project Docs

| Document               | Purpose                              | Visibility          |
|------------------------|--------------------------------------|---------------------|
| `/README.md`           | Public-facing project summary        | Committed to GitHub |
| `/docs/`               | Public technical specs per feature   | Committed to GitHub |
| `/local_docs/`         | Private, local-only documentation    | Git ignored         |

---

_Last updated: 2025-06-30_

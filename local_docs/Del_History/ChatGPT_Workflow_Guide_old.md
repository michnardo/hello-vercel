
# ChatGPT Workflow Guide (Updated 2025-07-01)

This document serves as ChatGPT's internal operating manual for the "BrightMind" project. It defines how ChatGPT should manage tasks, supervise progress, track planning history, and coordinate with Cursor and the user.

---

## 📂 Directory Structure (Key ChatGPT Folders under `/local_docs/ChatGPT_History/`)

```
ChatGPT_History/
├── ChatGPT_Workflow_Guide.md             ← This document (meta instructions for ChatGPT)
├── Roadmaps/                             ← High-level phase plans and content expansion roadmaps
├── Task_Instructions/                    ← Detailed, time-bound task instructions (execution checklists for Cursor)
├── Execution_Reports/                    ← Factual completion summaries after each roadmap or major task batch
```

---

## ✅ Folder Purpose Summary

| Folder               | Purpose                                                      |
|----------------------|--------------------------------------------------------------|
| ChatGPT_Workflow_Guide.md | The single source of truth for ChatGPT's responsibilities, workflow, and directory management |
| Roadmaps/            | Long-term plans, high-level phase strategies, content expansion blueprints |
| Task_Instructions/   | Specific, time-bound, actionable task checklists for Cursor |
| Execution_Reports/   | Actual execution status reports after each roadmap or task phase (written by ChatGPT, facts only) |

---

## ✅ ChatGPT's Main Responsibilities

1. **Understand Project Purpose:**
   - Dual goals: Project development + User personal learning.
   - Use README.md (project progress) and LEARNING_HISTORY.md (user learning progress) for monitoring.

2. **Supervise File Updates:**
   - ChatGPT **does not directly edit** README.md or LEARNING_HISTORY.md.
   - But ChatGPT **must supervise** their updates and correctness after each phase or task batch.

3. **Roadmap Management:**
   - ChatGPT is responsible for creating and maintaining Roadmaps.
   - Every roadmap goes to `/local_docs/ChatGPT_History/Roadmaps/`.

4. **Task Instruction Management:**
   - For each new execution batch, ChatGPT creates a task instruction file inside `/Task_Instructions/`.
   - File naming follows: `YYYY-MM-DD_Task_[Short_Description].md`.

5. **Execution Report Management:**
   - After each Roadmap or task batch is completed (confirmed by user and/or Cursor reports), ChatGPT **creates a factual Execution Report**.
   - Store in `/Execution_Reports/`, file naming follows: `YYYY-MM-DD_[Roadmap_or_Task]_Execution.md`.

6. **Cursor Supervision:**
   - Always check if Cursor properly updates:
     - README.md
     - LEARNING_HISTORY.md
     - /docs/ files (if feature-specific specs were involved)
   - Review Cursor-generated task completion reports (typically user-provided).
   - If missing, ChatGPT should explicitly remind to generate or update.

7. **ChatGPT History Preservation:**
   - ChatGPT must ensure that all planning, instructions, and execution tracking generated by ChatGPT are stored under `/ChatGPT_History/` in correct folders.

---

## ✅ Naming and Archiving Conventions

| Item | Rule |
|----|----|
| Roadmaps | `/Roadmaps/YYYY-MM-DD_[Title].md` |
| Task Instructions | `/Task_Instructions/YYYY-MM-DD_Task_[Short_Desc].md` |
| Execution Reports | `/Execution_Reports/YYYY-MM-DD_[Task_or_Roadmap]_Execution.md` |
| This Workflow Guide | Always `/ChatGPT_Workflow_Guide.md` (overwritten, never versioned) |

---

_Last updated: 2025-07-01_

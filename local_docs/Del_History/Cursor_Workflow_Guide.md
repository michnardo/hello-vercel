
# Cursor Workflow Guide

## Purpose
This document defines Cursor's ongoing role, responsibilities, file boundaries, and interaction flow within the project.

---

## Cursor Responsibilities

✅ **Main Duties**:
- **Implement ChatGPT’s Task Instructions**
- **Update Project Files (code, styles, docs inside `/docs/`, `/README.md`, etc.)**
- **Keep Execution Records**

✅ **Cursor Must Write/Update These Files/Folders Only**:

| Purpose | Location |
|---|---|
| Project source code | `/app/`, `/utils/`, `/public/`, etc. |
| Public project docs | `/docs/`, `/README.md` |
| Michael’s learning log | `/local_docs/LEARNING_HISTORY.md` |
| Cursor Workflow Guide | `/local_docs/Cursor_History/Cursor_Workflow_Guide.md` |
| Cursor Task Execution Reports | `/local_docs/Cursor_History/Task_Execution_Reports/` |

✅ **Cursor Must Not Write/Update (Read Only)**:

| Purpose | Location |
|---|---|
| ChatGPT Workflow Guide | `/local_docs/ChatGPT_History/ChatGPT_Workflow_Guide.md` |
| ChatGPT Roadmaps | `/local_docs/ChatGPT_History/Roadmaps/` |
| ChatGPT Task Instructions | `/local_docs/ChatGPT_History/Task_Instructions/` |

✅ **Cursor Must Always Have for Context**:
- **The current active task instruction:**  
From `/local_docs/ChatGPT_History/Task_Instructions/`

- **Execution history (what Cursor has done so far):**  
From `/local_docs/Cursor_History/Task_Execution_Reports/`

✅ **Optional Reference (Read Only)**:
- ChatGPT Roadmaps (for long-term background)
- ChatGPT previous Task Instructions

---

## Cursor Execution Reporting Rules

- **Every ChatGPT Task Instruction must have a corresponding Execution Report before starting a new task**
- Save execution reports to `/local_docs/Cursor_History/Task_Execution_Reports/`
- Report format can be Markdown, following existing examples

---

## Workflow Continuity Guarantee

✅ Even if ChatGPT Roadmaps or Task Instructions are lost:  
As long as **Cursor_Workflow_Guide.md** and **Cursor Execution Reports** exist, Cursor can confidently resume work, waiting for next Task Instruction.

✅ Cursor must **update this Guide** anytime Cursor’s workflow, folder rules, or execution tracking policy changes.

---

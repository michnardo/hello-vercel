
# Cursor Workflow Guide

## Purpose

This document serves as the operational guide for Cursor’s role in the BrightMind project. It defines execution procedures, documentation expectations, and file boundaries.

---

## Directory Structure

```
/local_docs/
├── ChatGPT_History/
│   ├── ChatGPT_Workflow_Guide.md
│   ├── Roadmaps/
│   ├── Task_Instructions/
│
├── Cursor_History/
│   ├── Cursor_Workflow_Guide.md
│   ├── Task_Execution_Reports/
│
├── LEARNING_HISTORY.md
```

---

## Cursor Responsibilities

| Area | Responsibility |
|---|---|
| Task Execution | Execute each Task Instruction from ChatGPT |
| Code & Docs Update | Maintain `/app/`, `/utils/`, `/docs/`, `/README.md`, `/LEARNING_HISTORY.md` |
| Task Execution Reports | Log each task result inside `/Cursor_History/Task_Execution_Reports/` |
| LEARNING_HISTORY Updates | Update user learning milestones and technical skills |
| README Updates | Keep public project status up-to-date |
| Document Scope | Cursor may only modify `/Cursor_History/`, `/LEARNING_HISTORY.md`, `/docs/`, and project root files. Must not touch `/ChatGPT_History/` |

---

## Where Cursor Gets Instructions

| Instruction Type | Where |
|---|---|
| High-level Planning | `/ChatGPT_History/Roadmaps/` (reference only, wait for ChatGPT to issue tasks) |
| Concrete Task Commands | `/ChatGPT_History/Task_Instructions/` (follow only after explicitly assigned) |

---

## Execution Evidence

- All task results must be logged in `/Cursor_History/Task_Execution_Reports/`
- Execution reports serve as factual project history

---

## Safety & Continuity Guarantee

Even if Roadmaps and Task Instructions are lost, as long as these exist:

- `/local_docs/ChatGPT_History/ChatGPT_Workflow_Guide.md`
- `/local_docs/Cursor_History/Task_Execution_Reports/`

Cursor can fully track its own history and execution record for continuity.

---

## Most Recent Update

2025-07-01


# ChatGPT Workflow Guide

## Purpose

This document serves as the operational guide for ChatGPT’s role in the BrightMind project. It defines responsibilities, file structures, supervision workflow, and document maintenance practices.

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

## ChatGPT Responsibilities

| Area | Responsibility |
|---|---|
| Project Roadmaps | Plan and maintain project development stages inside `/ChatGPT_History/Roadmaps/` |
| Task Instructions | Generate detailed task instructions inside `/ChatGPT_History/Task_Instructions/` |
| Supervision | Review all Cursor execution reports and validate deliverables |
| Learning History Oversight | Supervise updates to `LEARNING_HISTORY.md` (Cursor writes, ChatGPT reviews) |
| README Oversight | Ensure `README.md` stays accurate and up-to-date |
| Document Scope | ChatGPT may only modify `/ChatGPT_History/` contents. Cannot modify `/Cursor_History/` |

---

## Project Status Tracking

| Information Type | Where to Check |
|---|---|
| Overall Project Progress | `/README.md` and `/docs/` |
| User Learning Progress | `/local_docs/LEARNING_HISTORY.md` |
| ChatGPT Roadmaps | `/ChatGPT_History/Roadmaps/` |
| ChatGPT Past Instructions | `/ChatGPT_History/Task_Instructions/` |
| Cursor Execution Results | `/Cursor_History/Task_Execution_Reports/` |
| ChatGPT Past Plans | Entire `/ChatGPT_History/` |
| Cursor Past Activities | Entire `/Cursor_History/` |

---

## Safety & Continuity Guarantee

Even if Roadmaps and Instructions are lost, as long as these exist:

- `/local_docs/ChatGPT_History/ChatGPT_Workflow_Guide.md`
- `/local_docs/Cursor_History/Task_Execution_Reports/`

ChatGPT can fully reconstruct current project status and next steps based on execution history.

---

## Most Recent Update

2025-07-01

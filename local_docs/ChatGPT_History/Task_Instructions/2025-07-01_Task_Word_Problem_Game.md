# Task: Build the "Word Problem Game" Page

**Task Date:** 2025-07-01  
**Assigned To:** Cursor  
**Supervised By:** ChatGPT  
**Purpose:** Content Expansion — 4th Grade Math Coverage

---

## 🎯 Task Objective

Develop a new interactive game page: **Word Problem Game**

This will be our first math game focusing on **real-world word problems**, allowing kids to read a simple sentence and calculate the correct numerical answer.

---

## ✅ Functional Requirements

### Gameplay Flow:
1. **Display:**  
A simple word problem (English sentence format), e.g.:  
*"Tom had 5 apples. He bought 3 more. How many apples does he have now?"*

2. **User Input:**  
A single number input field where the user enters the numeric answer.

3. **Submit Answer Button:**  
Allow user to submit their answer.

4. **Feedback:**  
- ✅ Correct → Show success feedback with ✅
- ❌ Incorrect → Show the correct answer in feedback

5. **Next Question Button:**  
After feedback, allow the user to move to the next word problem.

6. **Scoring:**  
Show a running **Score count** at the top (matching current non-MCQ game style).

---

## ✅ Technical Requirements

- **Folder:** `/app/word-problem/`
- **CSS Styling:**  
Use the shared `SimpleGameLayout.module.css`.  
If needed, extend with a new `/word-problem/WordProblemGame.module.css`.

- **Components:**  
If possible, reuse existing shared components like `<AnswerForm />`.

- **No MCQ Style:**  
This game is a free-form numeric input, **not multiple choice**.

- **Question Source:**  
Hard-code 6–8 sample word problems (simple addition and subtraction for now).  
Randomly select from the list.

- **Future-Proofing:**  
Keep the structure clean so we can easily upgrade to more word problem types (e.g., multiplication, division) later.

---

## ✅ Learning Goals for Me (Project Owner)

For this task, ChatGPT aims for me to observe and understand:

- How to represent real-world text-based math problems in code
- How to design data structures for word problems
- How to extend existing input-based game flows
- How to keep layouts unified across different games

---

## ✅ Files to Update After Task Completion

- `/README.md`
- `/local_docs/LEARNING_HISTORY.md`
- `/local_docs/Cursor_History/Task_Execution_Reports/`

---

**Thank you Cursor! Please review this instruction carefully and proceed.**  
ChatGPT will review your final result after you finish and sync.

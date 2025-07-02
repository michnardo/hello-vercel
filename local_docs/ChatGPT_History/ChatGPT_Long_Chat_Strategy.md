# ChatGPT Long Chat Strategy for BrightMind Project

## Background

This project often involves long, detailed multi-day conversations. Chat length, context memory, and loading times are real concerns.

## Strategy for ChatGPT Long Chats

1. **Working Method:**  
Stay focused on the specific task at hand. Minimize re-loading entire project history in every reply.

2. **Historical Context Management:**  
When starting a new chat, always refer to:  
- `/local_docs/Chat_Opening_Templates.md` for the latest Chat Opening text.  
- `/local_docs/ChatGPT_History/` for detailed archived ChatGPT conversation summaries and transcripts (if needed).

3. **Context Compression Before Opening New Chat:**  
Before starting a new ChatGPT chat, I will summarize key project status and paste any necessary prior context.

4. **Documentation Rules:**  
ChatGPT should:
- Only modify `/docs/` and source code files unless I say otherwise.
- Never change `/local_docs/` contents unless I explicitly ask.

5. **Local-only Documents:**  
ChatGPT should assume anything under `/local_docs/` is **off-limits for direct editing suggestions**, unless instructed.
# Game Brief — Star Trek Movie Trivia

**Project:** Star Trek Movie Trivia  
**Stage:** Game brief (approved scope; game not yet built)  
**Version:** Brief v2 — October 19, 2026

## Concept

A short, single-player browser trivia game covering *Star Trek* feature films released from 1979 through 2002, including the six original-crew films and the four *Next Generation* films.

## Intended players

Casual Star Trek movie fans and people who enjoy film trivia. The tone should be inviting, with a mix of accessible and moderately challenging questions.

## First playable version

- **Main action:** Answer five multiple-choice questions randomly drawn from a larger pool at the start of each round. Each question offers exactly three answer buttons and one correct answer.
- **Subject matter:** Verifiable trivia about actors, characters, story events, and plots from the ten eligible feature films (*Star Trek: The Motion Picture* through *Star Trek: Nemesis*). Exclude later reboot films and TV-only trivia.
- **Question content:** A local bank of **30 prewritten, fact-checked questions**. Each round randomly selects **five distinct questions without replacement**; a new selection is made on Play Again. Question order may vary. Repeats across different rounds are allowed. No live API or AI calls at play time.
- **Start:** Open with concise instructions and a Start button. No question is answered or score advanced until Start is activated.
- **Scoring:** One point for each correct answer; zero for an incorrect answer. Each question can score only once; maximum score is 5.
- **Feedback and progression:** After one answer, lock that question, show whether it was correct plus a short fact-based explanation, then offer Next. After the fifth answer and Next, show the final score out of five.
- **Replay:** Play Again starts a fresh round at question 1 with a score of zero and cleared answers/feedback.
- **Controls:** Standard accessible buttons for mouse, touch, and keyboard (Tab and Enter). Make focus visible.
- **Form factor:** Two local, portable files: `index.html` (page, style, and game behavior) and `questions.js` (question data only). Both reside in the same folder and run directly in a modern browser. New questions can be appended to `questions.js` without editing the game logic. The game uses the number of valid questions found, not a hardcoded pool size.

## Out of scope for version 1

Timers, lives, network question fetching, AI-generated live questions, sound, accounts, leaderboards, databases, saved scores, paid APIs, tracking, and external libraries. Use original styling; no copyrighted film stills, studio logos, or licensed imagery are necessary.

## Five observable completion checks

1. **Opening:** Loading `index.html` shows instructions and Start, with no question in progress.
2. **Starting:** Start draws five unique entries from the bank and shows question 1 of 5 with three answer choices and score 0.
3. **Single submission:** Selecting an answer locks the question, displays correctness and explanation, and changes the score no more than once even after repeated clicks.
4. **Finishing:** After five answers, the result screen reports an accurate score out of 5.
5. **Restarting:** Play Again draws a new five-question round, resets to question 1 and score 0, and clears selections and feedback.

## Project boundaries and storage

Keep this game separate from the paused website project `my-first-site`. Suggested local folder and future GitHub repository: `my-first-game`. The game repository and Vercel project have **not** been created or verified yet. Do not write to the course-material repository.

## Next checkpoint

Use `vc-game-rules` to agree on selection rules, data format, and screen-state transitions. Prepare **30 verified questions** with unique identifiers, film names, exactly three options, a single answer key, feedback, and a source reference. Additions beyond 30 should require editing question data only. **Do not build until rules and content are approved.** Mark implementation and browser tests **Not tested** until actually performed.

## Extensible question-bank requirement

- Keep quiz content separate from rendering, scoring, and navigation.
- Each question record must have a stable unique ID, film title, question text, exactly three answer choices, one correct-answer key, concise explanation, and reference URL.
- A validation check must detect repeated IDs, incomplete entries, invalid answer keys, and a bank with fewer than five valid questions.
- Design for expansion to 50, 100, or more questions without changing gameplay code.
- Version 1 is **30 questions**, not 30 questions per round. A round is always five.

# Star Trek Movie Trivia — Game Rules (v2 — Randomized Question Bank)

**Project:** `my-first-game` (separate from `my-first-site`)  
**Stage:** `vc-game-rules` — draft for checkpoint review  
**Scope:** Ten original-crew and Next Generation theatrical films, 1979–2002. Static content; no game code yet.

## Player objective

Answer five distinct questions drawn at random from a local bank of 30 Star Trek movie trivia questions and earn up to five points.

## Player instructions

1. Read the introductory instructions and press **Start**.
2. Choose one of three answers using a mouse, touch, or keyboard (Tab then Enter/Space).
3. Read the answer feedback, then press **Next**.
4. After question 5, see your score and press **Play again** for a fresh round.

## States and transitions

| State / action | Expected result |
| --- | --- |
| Initial load | Show instructions and Start. No question answered and no score change. |
| Start | Choose five distinct questions at random from the bank; show question 1 of 5; score 0. |
| Choose A/B/C | Lock all answer buttons for that question; award 1 point only for the correct answer; show a short explanation and Next. |
| Repeated click/tap/key | No additional score, progress, or answer changes. |
| Next after questions 1–4 | Advance exactly one question; retain score. |
| Next after question 5 | Show the final score out of 5 and Play again; stop presenting answer controls. |
| Play again | Draw a new random group of five questions; reset score to 0, question to 1, selected answers and feedback; immediately start a fresh round. |
| Instructions/help during play (if implemented) | Show help without resetting or re-scoring; returning restores the same question, score, and answer lock. |

A round contains five unique question IDs with no duplication within that round. Different rounds may include some of the same questions. Keep the three answer options in their authored order in version 1. No timer, login, database, saved score, sound, or external API.

## Question-bank design

Version 1 ships with **30 verified questions**, with a target of roughly three per film across the ten eligible films (1979–2002). The five questions below are **examples**, not the complete bank.

Store question data separately in `questions.js` alongside `index.html`, allowing the quiz to run directly as local files. Each record must contain:

- `id`: permanent unique identifier
- `film`: relevant movie
- `prompt`: question text
- `choices`: exactly three answer strings
- `correctIndex`: 0, 1, or 2, indicating the correct choice
- `explanation`: short, accurate feedback
- `sourceUrl`: a reference to verify the answer

Do **not** hardcode the number 30 in the selection algorithm. Adding a new valid entry to `questions.js` should require no edits to rendering, navigation, or scoring logic. The bank is static and does not call outside services during gameplay.

At the start of each round, shuffle a copy of the question bank and take the first five; keep the master bank unchanged. A new shuffle occurs on Play again. A particular question can reappear across different rounds but never twice within a single round.

Validation must catch duplicate IDs, repeated prompts, missing fields, invalid answer keys, or fewer than five valid entries. The 30 items must be researched and checked before the game is considered complete.

## Proposed questions and answer feedback

All options are fictional distractors or genuine franchise references; only one is correct per question.

**1. In *Star Trek IV: The Voyage Home*, which animals must the Enterprise crew bring to their own century?**

- A. Bottlenose dolphins
- **B. Humpback whales (correct)**
- C. Orcas

Feedback: “The crew travels to 1980s Earth to bring back humpback whales and respond to a mysterious probe.”

Source: https://www.startrek.com/movies/star-trek-iv-the-voyage-home

**2. Who played Dr. Tolian Soran in *Star Trek Generations*?**

- **A. Malcolm McDowell (correct)**
- B. Christopher Plummer
- C. Ricardo Montalban

Feedback: “Malcolm McDowell portrayed Soran, the film's antagonist.”

Source: https://www.startrek.com/news/star-trek-generations-opened-20-years-ago-today

**3. Which adversary travels into Earth's past in *Star Trek: First Contact*?**

- A. The Klingons
- B. The Romulans
- **C. The Borg (correct)**

Feedback: “The Borg go into Earth's past, and Picard follows to protect the Phoenix's historic first warp flight.”

Source: https://www.startrek.com/movies/star-trek-viii-first-contact

**4. What device is seized by Khan in *Star Trek II: The Wrath of Khan*?**

- A. The trilithium weapon
- **B. The Genesis Device (correct)**
- C. The Omega particle

Feedback: “Khan takes the Genesis Device, which was developed to terraform lifeless worlds.”

Source: https://www.startrek.com/news/below-deck-lower-decks-410-genesis-device

**5. In *Star Trek: Nemesis*, Shinzon is a clone of which Starfleet officer?**

- **A. Jean-Luc Picard (correct)**
- B. William Riker
- C. Data

Feedback: “Shinzon is a clone of Jean-Luc Picard, created by the Romulans.”

Source: https://www.startrek.com/movies/star-trek-nemesis

## Acceptance tests

| Test | Steps | Expected |
| --- | --- | --- |
| Bank validation | Inspect the released question bank | Exactly 30 verified records, unique IDs, exactly three choices each, valid answer key and explanation |
| Random draw | Start a round and inspect selected IDs using a test-only output or an automated check | Exactly five different IDs, all found in the bank |
| Replay | Finish and play several additional rounds | New random draw, score zero and question 1; overlaps across rounds are permitted |
| All correct | For the actual five drawn questions, use each record's answer key | 5/5 |
| All wrong | Select a wrong option for every drawn question | 0/5 |
| Mixed | Answer three of the actual questions correctly and two incorrectly | 3/5 |
| Repeat selection | Try clicking another option after answering | No second score change |
| Extend bank | Add a 31st valid question in a test copy, without altering engine code | Bank validates, five questions still selected |
| Invalid data | In a test copy, duplicate an ID or supply an invalid answer key | Validation reports the problem rather than silently scoring bad data |
| Keyboard / touch | Play with keyboard and phone controls | Reachable controls, visible focus, one action per interaction |
| Help | Open and close instructions mid-round, if implemented | Preserve question, score, and locked state |

Fixed answer sequences from the original five-question prototype are **not valid regression tests** once selection is randomized. Tests must use the actual selected question IDs and their answer keys.

## Completion checkpoint

The learner reviews the 30-question plan, data format, randomized selection, and transitions. **Do not build the application until this rules document is approved.**

## Version status

- Specification written: **Yes**
- Five proposed examples documented: **Yes**; full 30-question bank created and verified: **No**
- HTML/JavaScript built: **No**
- Browser behavior tested: **Not tested**
- GitHub repository created for game: **Not verified**
- Vercel deployment: **Not started**

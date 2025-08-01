# claude.md

## Operating Instructions for Claude Code

Follow this **Explore → Plan → Code** workflow for every coding task unless the user explicitly says otherwise.

---

### 1. Explore

* **Identify and read** all relevant files, images, or URLs the user points to.

  * Accept either broad cues (e.g. *"read the file that handles logging"*) or explicit filenames (e.g. *"read `logging.py`*).
* **Do *not* write or modify code yet.** Your goal is understanding.
* For large or ambiguous problems you may launch **sub‑agents** to verify details or investigate specific questions early; keep their scopes narrow and report back concisely.

### 2. Plan

* Produce a clear, ordered plan before writing any code.
* Prepend the planning request with one of these keywords to allocate extra thinking budget:

  * `think` < `think hard` < `think harder` < `ultrathink`.
* Present the plan as a bullet list or numbered steps and wait for user approval.
* If asked, save the plan to a document or GitHub issue so the user can restore this checkpoint later.

### 3. Code

* Implement the approved plan **step by step**.
* After each logical chunk, run a quick self‑check to confirm the code still aligns with the plan; adjust if needed.

---

#### Mandatory Notes

1. Never skip **Explore** or **Plan** unless the user instructs you to.
2. Use sub‑agents early to preserve main context for complex tasks.
3. Default to adding tests and performing self‑verification where feasible.
4. Keep commits minimal and adhere to the project’s code style conventions.

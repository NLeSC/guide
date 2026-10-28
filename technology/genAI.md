# Coding with Generative AI

_Page maintainers: Ole Mussmann_ [@OleMussmann](https://github.com/OleMussmann)

## Coding Agents

Use coding agents instead of e.g. [ChatGPT](https://chatgpt.com/) or [claude.ai](https://claude.ai/) website. An agent sees your actual code and can run tests to check its own work. The trade-off is that it can also act, which is why the safety section (below) exists.

> agent = model + harness

A **model** is, in this context, a Large Language Model (LLM) that predicts the next token (we can imagine it, simplified, as "words") of a stream of words. The **harness** is the tooling that gives the LLM eyes, hands, and tools. Examples would be [Claude Code](https://claude.com/product/claude-code), [OpenCode](https://opencode.ai/), or the [Pi harness](https://pi.dev). These programs can not only output text, they can call command line tools, run scripts, read the output, and iterate on their approach.

## Subscription vs Tokens

To get started with agentic coding, you need access to a LLM. Those run often in the cloud (local models are possible, but out of scope here), and you either pay for a subcription with a certain amount of usage, or you pay per token ("word") of input/output. Subscriptions are cheaper, but tie you into a certain ecosystem. Pay-by-token is more expensive, but gives you a lot of flexibility on which models to use.

Some vendors forbid using their subcription with other harnesses (e.g. using a Claude subscription with OpenCode instead of Claude Code).

## Split Planning and Implementation

Think of an AI coding agent as a fast, well-meaning junior colleague who command your terminal. It tries eagerly to please you, and now and then it (very) confidently does the wrong thing. Before starting any work, take some time to spar with your agent about the problem at hand _until you have a shared understanding_. Pay close attention to unspecified boundary conditions where a LLM would need to start guessing. Write that plan to file somewhere, and use it as a guide for the implementation.

## Model Size

LLMs come in all shapes and sizes. Heavier, "smarter" models are more expensive than smaller ones. You can usually save a lot of money (and other resources) if you choose a model fitting for the job you want to get done. Smart, expensive models do the planning, smaller ones take over the implementation.

## Mistakes and Malice

For recommending best practices we should first have a rough idea about your risk profile. To simplify, we consider two data scenarios:

1. Working with mildly sensitive data. This can could be API keys that you could rotate, if leaked accidentally. We take this as a baseline, even if you don't think you have any sensitive data in the project.
2. Working with very sensitive data. This would be personally identifyable information, or anything that touches GDPR.

Furthermore, we assume two tiers of threats, honest mistakes and prompt injection.

### Honest Mistakes

Agents could accidentally read files that contain secrets, even if instructed otherwise.

### Prompt Injection

LLMs have difficulties distinguishing input and output, as well as data from instructions. If the agent reads a web page (or GitHub issue, or a PDF file; anything external, really) that contains machine-readable, hidden, malicious instructions in the source code - e.g. exfiltrate GitHub access keys, Bitcoin wallets, etc. - the LLM might be inclined to follow those malicious instructions.
The three aspects that make this dangerous are:

- Access to sensitive data
- Exposure to untrusted content (web pages, issues, emails, files)
- A way to commuticate externally

If one of those three is removed, it gets much safer.

### Countermeasures

### Human Oversight

Most harnesses will prompt you if they detect the LLM wants to execute destructive commands like `rm -rf`. Read those prompts _carefully_ and don't approve commands you do not understand. Never use "skip all permissions" or "auto-approve" modes for convenience outside of a sandbox (see below).

### Git

Use git and commit before the agent starts. Read all changes as if it were a Pull Request.

#### Instruction Files

Files like [AGENTS.md](https://agents.md/) and [CLAUDE.md](https://code.claude.com/docs/en/memory) can be used locally (a specific project) or globally (all projects on a specifig machine) to give additional instructions to any new agentic coding session. Those can contain information on how to work with a certain code-base (e.g. how to run tests, which coding standards to adhere to, etc.), but also instructions _not_ to read files, like `.env` or other files that could contain secrets.

Treat those as strong suggestions. The agent reads them and usually follows them, but it can forget or misread them, and text it comes across elsewhere can talk it out of them.

#### Harness Guardrails

Your harness settings can contain permission rules that state which folders or websites an agent may access. The software around the model enforces them, so they are more deterministic than the above instruction files. This protects against most honest mistakes, but will not hold back a determined compromised agent that would, for example, write a script to read the file instead of accessing it itself.

#### Sandboxes

There are stricter ways to encapsulate agents called sandboxes. Some agents have one built in that you can switch on. These have various degrees of protection, but most try to allow-list internet access to only trusted pages that you need to supply, and try to prevent access to files outside the current working directory. They can be "in the way" quite a bit, depending on your workflow. Use them selectively until they mature further.

For full isolation, the sandbox could be container or a virtual machine containing the code and the agent. Internet traffic would be filtered for malicious requests. All necessary secrets, like API keys, would be supplied as a placeholder and swapped out _outside_ the sandbox. This is rather complicated to set up correctly, and we don't have mature tooling yet to make this easy.

### Recommendations

Use both Instruction Files and Harness Guardrails for your everyday work with no- or mildly-sensitive data. Those should be able to protect you against most mistakes that agents can make. Try using built-in sandboxes and see if the added protection is worth the more complicated way of working.

When working with highly sensitive data, _avoid_ agentic coding with direct access to that data. You can use LLMs to spar about architecture, or analyze pasted code snippets in, for example, the ChatGPT or claude.ai website. _Never paste real records, though, not even a few rows as an example_.You can also develop the code with synthetic data first, and then test it on the private data afterwards.

## Bias and Output Verification

LLM output usually sounds very confident, but that does not mean it's correct or unbiased. The models are trained on biased real-world data, which can reenforce existing biases. Furthermore, if a model does not "know" the answer to a specific problem, it could make up something that sounds plausible. This is commonly called "hallucination".

> Plausible is not the same as correct.

In the end, you are responsible for any LLM output that you use. For some use-cases (e.g. proof-of-concept) good code is not important. In most other cases you should check and verify the output before you use it.

## Copyright and Licenses

The legal frameworks are not fully developed yet, but the indications are that LLM generated code is not copyrightable in the EU and US. This means that any license you apply to LLM generated code will have nothing to enforce. Keep your personal efforts separate from LLM generations, e.g. with separate git commits.

The code that the LLM creates _can_ be verbatim already licensed code. It is _your responsibility_ to not violate licenses of the original author. There is no mature tooling available yet that can reliably detect this. You can start with SCANOSS' (https://scanoss.com/) free public API (use via [scanoss.py](https://github.com/scanoss/scanoss.py)), but it has usage limits and its knowledge-base is hosted by SCANOSS, so your code will be sent to their servers.

## Strengths and Weaknesses

### Well Suited

- Sparring partner / pair programmer / junior dev
- Prototyping and exploring unfamiliar territory
- Automating repetitive or tedious tasks
- Popular frameworks and languages (Python, tidyverse, SQL…)
- Sifting through log files and stack traces
- Learning about new-to-you technologies
- Regex (genuinely very good at this)

### Dangerous Territory

- Gigantic inputs — models have a limited attention span
- Used as an oracle or on autopilot
- Feature creep — it will enthusiastically build things you didn't ask for
- Niche frameworks and languages
- Statistical reasoning — wrong tools/types, silent NA drops, off-by-one errors
- Looks correct ≠ works correctly

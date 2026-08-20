# AI & AI Coding — A Practical Guide for Software Engineers

The goal of this guide is to build a strong mental model of modern AI: how the models work, how AI applications are constructed, how AI coding systems work, and the vocabulary used across the field.

The emphasis is on practical AI engineering, rather than becoming an ML researcher.

---

## 1. What is AI?

At the highest level:

> AI is software that performs tasks we associate with intelligence.

Machine learning is a subset of AI.

Traditional programming generally looks like:

```text
rules + data → output
```

Machine learning instead looks like:

```text
data + desired outputs → learned model
```

For example, instead of explicitly programming:

```python
if email.contains("winner"):
    spam = True
```

we can train a model using millions of examples:

```text
email → spam / not spam
```

The model learns statistical patterns that help it predict whether a new email is spam.

---

## 2. Neural Networks

Modern AI is dominated by neural networks.

Conceptually:

```text
input
  ↓
[ mathematical transformations ]
  ↓
[ mathematical transformations ]
  ↓
[ mathematical transformations ]
  ↓
output
```

A neural network contains **parameters** — enormous collections of numerical values that determine how the network behaves.

Training is essentially the process of finding parameter values that make the network produce better outputs.

A simplified training loop looks like:

```text
input
  ↓
model
  ↓
prediction
  ↓
compare prediction with desired answer
  ↓
loss
  ↓
calculate gradients
  ↓
adjust parameters
  ↓
repeat
```

This process can involve billions or even trillions of parameter updates.

### Important terms

| Term                     | Meaning                                             |
| ------------------------ | --------------------------------------------------- |
| **Weights / parameters** | Values learned by the model                         |
| **Loss function**        | Measures how wrong a prediction is                  |
| **Gradient**             | Tells training which direction to adjust parameters |
| **Backpropagation**      | Computes gradients through the network              |
| **Optimization**         | Process of updating parameters to reduce loss       |
| **Training**             | Learning the parameters                             |
| **Inference**            | Using the trained parameters                        |

---

## 3. What is an LLM?

**LLM = Large Language Model.**

An LLM is a neural network trained to model language.

At a fundamental level, a language model learns:

> Given the previous tokens, what token is likely to come next?

For example:

```text
The capital of France is ___
```

The model might assign probabilities roughly like:

```text
Paris       0.97
London      0.001
Berlin      0.0005
...
```

This sounds simple, but enormous datasets, huge neural networks, sophisticated architectures, and large-scale training produce surprisingly capable systems.

Modern LLMs can perform tasks such as:

- Code generation
- Summarization
- Translation
- Reasoning
- Information extraction
- Classification
- Question answering
- Planning
- Tool use
- Multimodal understanding

---

## 4. Tokens

LLMs don't directly process human concepts such as "words."

They process **tokens**.

For example:

```text
"Software engineering is fun"
```

might be tokenized approximately as:

```text
Software
 engineering
 is
 fun
```

But tokenization can also split words into pieces.

Tokens matter because they affect:

- API cost
- Context size
- Latency
- Model limits
- Prompt size
- Output length

If an API request contains 20,000 tokens, the model is processing roughly 20,000 token units of context.

---

## 5. Transformers

One of the most important concepts in modern AI is the:

> **Transformer architecture**

Modern LLMs are predominantly transformer-based.

A central component of transformers is **attention**.

Attention allows the model to determine which parts of the input are relevant to other parts.

For example:

```text
The developer put the laptop on the desk because it was heavy.
```

The model needs to establish relationships between tokens to understand what "it" refers to.

Conceptually:

```text
developer ──────────┐
                    │
laptop ─────────────┤
                    │
desk ───────────────┤
                    ↓
because → it ← heavy
```

Attention mechanisms allow neural networks to learn these relationships.

### Important transformer concepts

- Self-attention
- Multi-head attention
- Positional information
- Transformer blocks
- Embeddings
- Feed-forward layers

---

## 6. Embeddings

Embeddings are one of the most important concepts for practical AI applications.

An **embedding** converts information such as text into a numerical vector.

For example:

```text
"dog"
    ↓
[0.21, -0.73, 0.44, 0.18, ...]
```

The resulting vector represents aspects of the item's meaning.

Conceptually:

```text
dog       → [0.20, 0.70, ...]
puppy     → [0.21, 0.69, ...]
car       → [-0.40, 0.10, ...]
```

"dog" and "puppy" may end up relatively close together in vector space, while "car" may be farther away.

### Semantic Search

Instead of looking only for exact keyword matches, a system can search for things that are meaningfully similar.

This concept powers many AI applications.

---

## 7. RAG — Retrieval-Augmented Generation

**RAG** stands for:

> Retrieval-Augmented Generation

It is one of the most common architectures for giving an LLM access to external knowledge.

The basic pattern is:

```text
User question
     ↓
retrieve relevant information
     ↓
put retrieved information into context
     ↓
LLM
     ↓
answer
```

Suppose an organization has 500,000 internal documents.

Instead of retraining an LLM on all of those documents, a RAG system can create searchable representations of them.

```text
documents
    ↓
chunk documents
    ↓
generate embeddings
    ↓
store embeddings
    ↓
vector database
```

Then:

```text
"What is our parental leave policy?"
                 ↓
              embedding
                 ↓
           vector search
                 ↓
        relevant documents
                 ↓
               prompt
                 ↓
                LLM
                 ↓
              answer
```

A typical RAG system may contain:

- LLM
- Embedding model
- Vector database
- Retriever
- Reranker
- Prompt
- Application logic

RAG is particularly useful when the information:

- Changes frequently
- Is private
- Belongs to a specific organization
- Doesn't justify retraining the model
- Needs to be sourced from documents

---

## 8. Vector Databases

Common vector database technologies include:

- Pinecone
- Weaviate
- Milvus
- Qdrant
- pgvector

The basic workflow is:

```text
document
    ↓
embedding
    ↓
vector database
```

Then:

```text
query
  ↓
embedding
  ↓
similarity search
  ↓
nearest vectors
```

A vector database is **not an LLM**.

It is infrastructure for efficiently finding semantically similar data.

Similarity is often measured using techniques such as:

- Cosine similarity
- Euclidean distance
- Dot product

---

## 9. Prompt Engineering

Prompt engineering is the practice of designing model inputs to produce reliable outputs.

A simple prompt:

```text
Summarize this.
```

A more structured prompt:

```text
Summarize the document.

Return:

- summary
- key_risks
- action_items

Do not invent information that is not present in the document.
```

However, modern AI engineering is moving beyond simply writing clever prompts.

A production system often depends on:

```text
prompt
+ model selection
+ context
+ retrieval
+ tools
+ structured outputs
+ evaluation
+ guardrails
```

The prompt is only one component of the overall system.

---

## 10. Context Windows

A model's **context window** is the amount of tokenized information it can process as part of a request.

Conceptually:

```text
┌─────────────────────────────┐
│ system instructions         │
│ conversation                │
│ documents                   │
│ tool results                │
│ user question               │
└─────────────────────────────┘
              ↓
             LLM
```

Context can include:

- System instructions
- Conversation history
- Retrieved documents
- Source code
- Tool results
- User input

A large context window is useful, but:

> Large context does not automatically mean perfect recall or reasoning over every piece of information.

Context selection, retrieval, summarization, and organization still matter.

---

## 11. Hallucinations

LLMs do not inherently function as authoritative databases of facts.

They generate outputs based on learned patterns and the context provided to them.

As a result, an LLM can confidently generate something that is false.

This is commonly called a:

> **hallucination**

For example:

```text
User:
When was FooBar framework created?

Model:
FooBar was created in 2014 by...
```

The answer may sound convincing while being completely fabricated.

Production systems therefore often use:

- RAG
- External tools
- Citations
- Validation
- Structured outputs
- Evaluations
- Human review
- Constrained workflows

A useful mental model is:

> **An LLM is a probabilistic generator, not a deterministic database.**

---

## 12. Temperature

Temperature influences how the model samples from its probability distribution.

A simplified intuition:

```text
low temperature
    ↓
more predictable / conservative

high temperature
    ↓
more varied / stochastic
```

For example, the following often benefit from more predictable behavior:

- Code generation
- Data extraction
- Structured output

Creative generation may benefit from greater variation.

Temperature does not make a model fundamentally smarter or more knowledgeable.

---

## 13. Pretraining vs Fine-Tuning

These concepts are frequently confused.

### Pretraining

A model learns general patterns from a huge dataset.

```text
massive dataset
      ↓
   training
      ↓
base model
```

This is the expensive foundational training stage used to create general-purpose models.

### Fine-tuning

A pretrained model is trained further on a more specific dataset.

```text
base model
    ↓
task/domain-specific training
    ↓
fine-tuned model
```

For example:

```text
general model
      ↓
specialized examples
      ↓
specialized behavior
```

However, fine-tuning isn't automatically the right solution.

A useful rule of thumb:

| Requirement                                    | Potential solution          |
| ---------------------------------------------- | --------------------------- |
| Need external/frequently changing knowledge    | **RAG**                     |
| Need different behavior or task specialization | **Potentially fine-tuning** |
| Need external actions                          | **Tools / agents**          |

---

## 14. Inference

**Inference** means running a trained model to produce an output.

Training:

```text
learn parameters
```

Inference:

```text
use parameters
```

This distinction becomes important when discussing AI infrastructure and costs.

Training infrastructure and inference infrastructure have very different requirements.

---

## 15. AI Coding

AI coding has evolved through several stages.

### Level 1 — Autocomplete

```text
IDE
 ↓
AI predicts code
```

The model suggests the next piece of code as you type.

### Level 2 — Chat

```text
developer ↔ coding model
```

You can ask:

```text
Why is this function failing?
```

or:

```text
Explain this code.
```

### Level 3 — Codebase-Aware Assistance

The AI can work with an entire repository.

```text
AI
 ↓
search files
 ↓
inspect dependencies
 ↓
understand surrounding code
 ↓
suggest changes
```

This is substantially more useful than simple autocomplete.

### Level 4 — Agentic Coding

A coding agent can potentially perform an entire workflow:

```text
read issue
   ↓
inspect repository
   ↓
plan changes
   ↓
edit files
   ↓
run tests
   ↓
inspect failures
   ↓
modify code
   ↓
run tests again
   ↓
create PR
```

This is generally referred to as **agentic coding** or a **coding agent**.

---

## 16. What is an AI Agent?

There isn't one universally accepted definition of "agent."

A useful practical definition is:

> **An AI agent is a model-driven system that can decide what actions to take, execute tools, observe the results, and continue toward a goal.**

A simplified agent loop:

```text
          ┌──────────────┐
          │              │
          ↓              │
       observe           │
          ↓              │
        reason           │
          ↓              │
     choose action       │
          ↓              │
       use tool          │
          ↓              │
       tool result ──────┘
```

For a coding agent, the available tools might include:

```text
read_file()
search_code()
edit_file()
run_tests()
git_diff()
terminal()
```

The LLM doesn't inherently have access to your filesystem or terminal.

The agent runtime provides the tools.

> **That distinction is fundamental.**

---

## 17. Tool Calling

Tool calling allows a model to request that external software perform an action.

For example:

```text
User:
What's the weather in Melbourne?
```

The model might produce a structured tool request:

```json
{
  "tool": "get_weather",
  "location": "Melbourne"
}
```

The application executes the function:

```python
get_weather("Melbourne")
```

and returns:

```json
{
  "temperature": 14,
  "condition": "Cloudy"
}
```

The model can then use that result to produce the final answer.

The architecture is:

```text
LLM
 ↓
tool selection
 ↓
application executes tool
 ↓
tool result
 ↓
LLM
 ↓
final response
```

This mechanism is foundational to agentic systems.

---

## 18. Structured Outputs

LLMs naturally produce text.

Software applications often need structured data.

Instead of:

```text
Sure! Here's what I found...
```

an application may want:

```json
{
  "customer_id": "123",
  "risk": "high",
  "reason": "..."
}
```

Modern AI APIs can constrain model outputs to schemas.

This enables:

```text
LLM
 ↓
structured data
 ↓
normal application code
```

rather than:

```text
LLM
 ↓
arbitrary prose
 ↓
regex
 ↓
pain
```

Structured outputs are particularly useful for:

- API integrations
- Workflow automation
- Classification
- Data extraction
- Tool calling
- Database operations

---

## 19. AI Coding Architecture

A simplified coding-agent architecture might look like:

```text
                    Developer
                        │
                        ↓
                  Coding Agent
                        │
                ┌───────┴────────┐
                ↓                ↓
               LLM          Agent Runtime
                                 │
                ┌────────────────┼────────────────┐
                ↓                ↓                ↓
           Code search       File edits       Terminal
                                                    │
                                                  tests
                                                    │
                                                 compiler
                                                    │
                                                   git
```

The LLM provides capabilities such as:

- Language understanding
- Reasoning
- Code generation
- Planning

The agent runtime provides:

- Tools
- State
- Execution
- Permissions
- Loops
- Error handling
- Sandboxing
- Environment management

This separation is crucial.

---

## 20. The Hard Part of AI Coding

Generating code is becoming increasingly easy.

**Verifying code is much harder.**

An AI might generate:

```python
def process_payment(...):
    ...
```

The code can look excellent while still containing serious problems.

For example:

- Race conditions
- Security vulnerabilities
- Incorrect retries
- Double charging
- Leaked secrets
- Broken transaction semantics
- Incorrect error handling
- Performance problems
- Subtle backwards compatibility issues

A serious coding-agent workflow therefore looks more like:

```text
generate
   ↓
compile
   ↓
lint
   ↓
test
   ↓
static analysis
   ↓
security checks
   ↓
human review
```

A useful principle is:

> **AI makes code generation cheaper; verification becomes disproportionately more valuable.**

---

## 21. SWE-bench

SWE-bench is a benchmark for evaluating AI systems on real-world software engineering tasks.

Instead of asking:

> "Can the model write a Python function?"

the system is given something closer to:

```text
GitHub issue
      ↓
repository
      ↓
AI modifies code
      ↓
tests
      ↓
did it actually solve the issue?
```

This tests capabilities such as:

- Understanding existing code
- Navigating repositories
- Debugging
- Making multi-file changes
- Preserving existing behavior
- Running tests
- Fixing failures

These are much closer to real software engineering than isolated code-generation exercises.

---

## 22. Evals

One of the most important concepts in AI engineering is:

> **Evals**

Short for **evaluations**.

AI systems are probabilistic, so:

> "It seems good"

isn't a sufficient engineering methodology.

Suppose an AI customer-support system is being developed.

Create a representative test set:

```text
1,000 representative questions
             ↓
           system
             ↓
      expected vs actual
             ↓
           metrics
```

Potential metrics include:

- Accuracy
- Task completion
- Hallucination rate
- Groundedness
- Tool-call success
- Latency
- Cost
- Refusal behavior
- Safety behavior

AI systems need systematic evaluation because changing a prompt or model can improve one behavior while accidentally breaking another.

---

## 23. The Modern AI Application Stack

A production AI application might look roughly like:

```text
                    UI
                     │
                     ↓
                Application
                     │
             ┌───────┴───────┐
             ↓               ↓
           Agent             RAG
             │               │
          ┌──┴──┐        Vector DB
          ↓     ↓
        Tools   LLM
                │
         ┌──────┼──────┐
         ↓      ↓      ↓
       Model   Model  Model
       API     API    API
```

Around the system you'll often find:

- Observability
- Evaluation
- Security
- Guardrails
- Caching
- Rate limiting
- Logging
- Cost controls
- Authentication
- Authorization

A production AI system is therefore much more than:

```python
response = llm(prompt)
```

---

## 24. AI vs ML vs Deep Learning vs LLM

A useful hierarchy is:

```text
Artificial Intelligence
│
└── Machine Learning
     │
     └── Deep Learning
          │
          └── Neural Networks
               │
               └── Transformers
                    │
                    └── Many modern LLMs
```

These terms are related but are not interchangeable.

For example:

```text
AI ≠ machine learning ≠ deep learning ≠ LLM
```

LLMs are one important category within the much larger AI field.

---

## 25. Important AI Engineering Terms

| Term                  | Meaning                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| **AI**                | Broad field of building systems capable of tasks associated with intelligence |
| **ML**                | Learning patterns from data rather than explicitly programming every rule     |
| **Deep Learning**     | Machine learning using multi-layer neural networks                            |
| **LLM**               | Large Language Model                                                          |
| **Token**             | Unit of text processed by a model                                             |
| **Embedding**         | Vector representation of information                                          |
| **Transformer**       | Neural-network architecture underlying modern LLMs                            |
| **Attention**         | Mechanism for modeling relationships between tokens                           |
| **Inference**         | Running a trained model                                                       |
| **Fine-tuning**       | Additional training of a pretrained model                                     |
| **RAG**               | Retrieve information and provide it to a model as context                     |
| **Agent**             | Model-driven system capable of taking actions toward a goal                   |
| **Tool calling**      | Model requests execution of an external function/tool                         |
| **Context window**    | Amount of context a model can process                                         |
| **Hallucination**     | Plausible but unsupported or false generated information                      |
| **Eval**              | Systematic measurement of AI behavior                                         |
| **Inference latency** | Time required to produce a response                                           |
| **Quantization**      | Reducing numerical precision to reduce model resource requirements            |
| **Distillation**      | Training a smaller model to reproduce capabilities of a larger model          |
| **MoE**               | Mixture-of-Experts architecture                                               |
| **Guardrails**        | Controls designed to constrain system behavior                                |
| **RLHF**              | Reinforcement Learning from Human Feedback                                    |
| **RL**                | Reinforcement Learning                                                        |
| **Multimodal**        | Handling multiple types of input/output such as text, images, audio, or video |
| **VLM**               | Vision-Language Model                                                         |
| **Agentic workflow**  | Multi-step workflow involving models, tools, and state                        |

---

## 26. Three Levels of AI Knowledge

A useful learning progression is:

### Level 1 — AI Literacy

Understand:

- LLMs
- Tokens
- Transformers
- Embeddings
- RAG
- Agents
- Fine-tuning
- Inference
- Hallucinations

You should be able to explain what each one does and how they relate.

### Level 2 — AI Engineering

Understand:

- Model APIs
- Streaming
- Structured outputs
- Tool calling
- RAG pipelines
- Vector search
- Chunking
- Reranking
- Prompt management
- Evaluations
- Observability
- Latency
- Cost
- Caching
- Security

This is the level required to build serious AI applications.

### Level 3 — ML Engineering / Research

Understand:

- Gradient descent
- Backpropagation
- Attention mathematics
- Model architecture
- Distributed training
- GPU memory
- Optimization
- Model scaling
- Reinforcement learning
- Post-training
- Data curation
- Training infrastructure

This level is useful for building and researching models themselves, but isn't required for most AI application engineering.

---

## 27. Better Questions for AI System Design

Good AI engineering questions tend to focus on **system behavior and measurable outcomes**.

Instead of:

> "Which LLM are you using?"

A stronger question is:

> "What's the evaluation set you're using to determine whether the new model is actually better?"

Instead of:

> "Does it hallucinate?"

Ask:

> "How are you measuring groundedness, and what happens when retrieval doesn't return relevant context?"

Instead of:

> "Are you using agents?"

Ask:

> "What tools does the agent have access to, and how are execution permissions controlled?"

Instead of:

> "Why don't you fine-tune it?"

Ask:

> "Is the problem knowledge, behavior, or retrieval? Those suggest different solutions."

Instead of:

> "What's the context window?"

Ask:

> "How are you managing context quality as the conversation or repository grows?"

Instead of:

> "What's the best model?"

Ask:

> "Best for which workload, according to which evals, latency requirements, and cost constraints?"

There is rarely a universally best model.

---

## 28. The Fundamental Mental Shift

Traditional software often looks like:

```text
INPUT
  ↓
DETERMINISTIC CODE
  ↓
OUTPUT
```

AI software often looks like:

```text
INPUT
  ↓
PROBABILISTIC MODEL
  ↓
OUTPUT
```

This changes the engineering problem.

Traditional software asks:

> "What does the system do?"

AI engineering also needs to ask:

- "What does the system usually do?"
- "What happens when it fails?"
- "How often does it fail?"
- "Can we detect the failure?"
- "Can we recover from it?"
- "How do we measure improvements?"

This is why evals, observability, testing, guardrails, and human oversight are so important.

---

# AI Engineer Cheat Sheet

| Concept            | Definition                                                                             |
| ------------------ | -------------------------------------------------------------------------------------- |
| **LLM**            | Model that generates tokens                                                            |
| **Transformer**    | Architecture underlying modern LLMs                                                    |
| **Embedding**      | Meaning represented as a vector                                                        |
| **RAG**            | Retrieve relevant information → provide it to the model                                |
| **Agent**          | Model + tools + state/loop + goal                                                      |
| **Tool calling**   | Model requests that software perform an action                                         |
| **Fine-tuning**    | Additional training to change or specialize model behavior                             |
| **Context**        | Information available to the model for the current task                                |
| **Hallucination**  | Plausible but unsupported or false generated information                               |
| **Eval**           | Systematic measurement of AI performance                                               |
| **Inference**      | Running a trained model                                                                |
| **AI engineering** | Model + data + prompts + context + tools + infrastructure + evaluation + observability |

---

# The Core Principle

**Modern AI engineering isn't primarily about making a model smarter; it's about building a reliable software system around a probabilistic model.**

That distinction explains much of the difference between **using an LLM** and **engineering an AI system**.

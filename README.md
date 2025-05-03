<div align="center">
  <img src="/assets/hero.png" alt="banner for prompt merge" width="100%" />
</div>


# prompt-merge

[![Code Standards & Testing](https://github.com/zrosenbauer/prompt-merge/actions/workflows/ci.yaml/badge.svg)](https://github.com/zrosenbauer/prompt-merge/actions/workflows/ci.yaml)

Zero-dependency library for conditionally merging LLM (system) prompts into a single string.

## Installation

```bash
npm install prompt-merge
```

## Usage

```ts
import pm from "prompt-merge";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-4o"),
  system: pm(
    "You are a helpful assistant.",
    canTranslate && "You can translate text.",
    {
      "You support translating Japanese to English": canTranslateJapanese,
      "You support translating German to English": canTranslateGerman,
    }
  ),
  messages,
});
```

## Acknowledgements

This package was inspired by two packages I've used for managing classNames (which for all intents and purposes is what prompts are... just strings):

- [classnames](https://github.com/JedWatson/classnames)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

<!-- Sponsorship footer -->
<br>
<br>
<hr>
<div align="center">
  <h2>Sponsorship</h1>
  <div><sup>Special thanks to:</sup></div>
  <br>
  <br>
  <a href="https://www.joggr.io/?utm_source=github&utm_medium=org-readme&utm_campaign=static-docs">
    <img src="https://assets.joggr.io/logos/logo.png" width="160"/>
  </a>
</div>

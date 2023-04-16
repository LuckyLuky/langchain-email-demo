# Langchain Email Demo

## Description 

This is just a small demo script showcasing [Langchain](https://docs.langchain.com/docs/) and [few-shot learning](https://python.langchain.com/en/latest/modules/models/chat/examples/few_shot_examples.html) for sales email use case.

## Usage

This script uses Deno. 

1. Create `.env` file and insert environment variables
```env
OPEN_API_KEY=your-open-api-key

VERBOSE=true # optional - turns on more verbose mode
```
2. Run script
```zsh
deno run --allow-net --allow-read --allow-env index.ts
```
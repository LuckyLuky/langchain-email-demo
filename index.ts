import "https://deno.land/x/dotenv/load.ts";
import { LLMChain } from "https://esm.sh/langchain";
import { ChatOpenAI } from "https://esm.sh/langchain/chat_models/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  AIMessagePromptTemplate,
  ChatPromptTemplate,
} from "https://esm.sh/langchain/prompts";
import { log, isVerboseMode } from "./utils.ts";

const verbose = isVerboseMode();

log("Running email response assistant");

const chat = new ChatOpenAI({ temperature: 0, verbose });

log("Feeding few shot data");

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(`
  You are a helpful assistant for sales people. Sales people are trying to win as many deals as possible. 
  When given a message from a sales person's customer, you will reply with response that is most likely to win a deal. 
  Reply should be no longer than 1000 characters.
  `),
  HumanMessagePromptTemplate.fromTemplate(
    "Hello! I'd like to book an apartment, would it be possible?"
  ),
  AIMessagePromptTemplate.fromTemplate(
    "Hello dear sir! Most definitely! When would you like to use our services?"
  ),
  HumanMessagePromptTemplate.fromTemplate("Wazzup! Got a room?"),
  AIMessagePromptTemplate.fromTemplate(
    "Hello, please show some respect. Yes, we do, when would you like to arrive?"
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

log("Setting up LLM chain");

const chain = new LLMChain({ llm: chat, prompt: chatPrompt, verbose });

log("Waiting for response");

const response = await chain.run(
  "Hello, how are you? I was wondering, do you have a free from for tomorrow?"
);

log("\n\nResponse:\n");
console.log(response);

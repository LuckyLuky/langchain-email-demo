import { config } from "https://deno.land/x/dotenv/mod.ts";

const envConfig = config();
const verboseMode = Boolean(
  envConfig.VERBOSE && ["true", "1", "yes", "on"].includes(envConfig.VERBOSE)
);
if (verboseMode) {
  console.info("Running in verbose mode");
}

export const isVerboseMode = () => verboseMode;

export const log = (...args: any[]) => {
  if (verboseMode) {
    console.log(...args);
  }
};

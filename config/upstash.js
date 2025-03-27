import { Client as WorkdlowCLient } from "@upstash/workflow";
import { QSTASH_URL, QSTASH_TOKEN } from "./env.js";

export const workflowClient = new WorkdlowCLient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});

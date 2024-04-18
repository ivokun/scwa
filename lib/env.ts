// reference: https://github.com/georgwittberger/next-app-router-template/blob/ac298c83b77dcc5f370bcedd671c7412cad4bce6/src/env.mjs
import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  OPENWEATHERMAP_API_KEY: z.string().min(1),
  OPENWEATHERMAP_API_URL: z.string().url(),
  IP2LOCATION_API_KEY: z.string().min(1),
  IP2LOCATION_API_URL: z.string().url(),
  UNSPLASH_API_URL: z.string().url(),
  UNSPLASH_API_ACCESS_KEY: z.string().min(1),
  UNSPLASH_API_SECRET_KEY: z.string().min(1),
});

const clientEnvSchema = z.object({});

const serverParsed = serverEnvSchema.safeParse(process.env);
const clientParsed = clientEnvSchema.safeParse(process.env);

if (!serverParsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    serverParsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid server environment variables");
}
if (!clientParsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    clientParsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid client environment variables");
}

const serverEnv = new Proxy(serverParsed.data, {
  get(target, prop) {
    if (typeof prop !== "string") return undefined;
    return target[prop as keyof typeof target];
  },
});

const clientEnv = new Proxy(serverParsed.data, {
  get(target, prop) {
    if (typeof prop !== "string") return undefined;
    return target[prop as keyof typeof target];
  },
});

export { serverEnv, clientEnv };

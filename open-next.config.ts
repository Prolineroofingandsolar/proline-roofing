import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Build the Next.js app with an explicit command so the adapter doesn't
// recursively invoke `npm run build` (which now points at this adapter).
config.buildCommand = "next build --webpack";

export default config;

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Fall back to a placeholder so the module doesn't throw at build time
// when the env var isn't present. The fetch functions already guard with
// `if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null` so the
// placeholder is never actually used in a real request.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

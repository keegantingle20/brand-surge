import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Wire env vars after creating a Sanity project:
 * NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET (default production)
 */
export function getSanityClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) {
    return null;
  }

  return createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: "2024-01-01",
    useCdn: process.env.NODE_ENV === "production",
  });
}

export const sanityClient = getSanityClient();

/** Pass a Sanity image object from GROQ; returns null if client or source is missing. */
export function urlForImage(source: unknown) {
  const client = getSanityClient();
  if (!client || source == null || typeof source !== "object") return null;
  try {
    return imageUrlBuilder(client).image(source as never).url();
  } catch {
    return null;
  }
}

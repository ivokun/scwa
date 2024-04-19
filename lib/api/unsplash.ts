import { z } from "zod";
import { APIConfig } from "@/lib/api/utils";

// Unsplash API
// reference: https://unsplash.com/documentation
const UnsplashAPISchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  description: z.string().nullable(),
  color: z.string(),
  user: z.object({
    name: z.string(),
    links: z.object({
      self: z.string(),
      html: z.string(),
      photos: z.string(),
      likes: z.string(),
    }),
  }),
  urls: z.object({
    raw: z.string(),
    full: z.string(),
    regular: z.string(),
    small: z.string(),
    thumb: z.string(),
  }),
  links: z.object({
    self: z.string(),
    html: z.string(),
    download: z.string(),
    download_location: z.string(),
  }),
});
type UnsplashAPI = z.infer<typeof UnsplashAPISchema>;
async function getUnsplashImageURLs(
  config: APIConfig,
  query: string,
  orientation: "landscape" | "portrait" = "landscape",
  count: number = 5,
): Promise<UnsplashAPI[]> {
  const queries = new URLSearchParams({
    query,
    orientation,
    content_filter: "high",
    count: count.toString(),
    client_id: config.apiKey,
  });
  const url = new URL(`/photos/random?${queries.toString()}`, config.baseURL);
  const response = await fetch(url, { next: { revalidate: 600 } });
  const json = await response.json();
  const parsed = z.array(UnsplashAPISchema).safeParse(json);
  if (!parsed.success) {
    throw new Error(
      `Error parsing Unsplash API data: ${parsed.error.flatten().fieldErrors}`,
    );
  }
  return parsed.data;
}
async function getRandomUnsplashImageURL(
  config: APIConfig,
  query: string,
  orientation: "landscape" | "portrait" = "landscape",
): Promise<UnsplashAPI> {
  const images = await getUnsplashImageURLs(config, query, orientation, 10);
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export { getUnsplashImageURLs, getRandomUnsplashImageURL };
export type { UnsplashAPI };

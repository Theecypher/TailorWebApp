// types/media.ts
export type MediaType = "image" | "video" | "text";

export type MediaItem = {
  id: string;
  type: MediaType;
  content: string; // image/video = preview URL, text = actual text
};

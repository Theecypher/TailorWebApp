// types/media.ts
export type MediaType = "image" | "video" | "text";

export type MediaContentProp = {
  type: MediaType;
  content: string; // image/video = preview URL, text = actual text
};

export type MediaItem = {
  id: string;
  name: string;
  item: MediaContentProp[];
};

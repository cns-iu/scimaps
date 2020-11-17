export interface ThumbnailLink {
  title: string;
  image: string;
  link: string;
}

export interface DiscoverItem {
  title: string;
  body: string;
  thumbnails: ThumbnailLink[];
  slug: string;
  directory: string;
}

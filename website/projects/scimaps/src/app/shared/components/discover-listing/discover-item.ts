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

/**
 * Interface for map items
 */
export interface MapItem {
  /** Title of map item */
  title: string;
  makers: string[];
  location: string;
  year: string;
  description: string;
  references: string[];
  /** URL of thumbnail image */
  thumbnail: string;
}

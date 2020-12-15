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
  /** Makers of the item */
  makers: string[];
  /** Location where the item was made */
  location: string;
  /** Credit text */
  credit: string;
  /** Year the item was made */
  year: string;
  /** Description of the item */
  description: string;
  /** References for the item */
  references: string[];
  /** URL of thumbnail image */
  thumbnail: string;
}

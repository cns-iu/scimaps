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
 * Interface for map and macroscope items
 */
export interface MapMacroscopeItem {
  /** Title of item */
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
  /** Languages that the item has been translated into */
  translations: Language[];
}

export interface Language {
  abbreviation: string;
  abbr_short: string;
  language: string;
  native: string;
}
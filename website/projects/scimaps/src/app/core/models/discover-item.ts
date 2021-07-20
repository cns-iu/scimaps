import { Profile } from "./profile";

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
 * Interface for information on a maker
 */
export interface MakerInfo {
  /** Name of the person */
  name: string;
  /** The person's job */
  job: string;
  /** Person's biography */
  bio: string;
  /** URL of their profile picture */
  thumbnail: string;
}

/**
 * Interface for map and macroscope items
 */
export interface MapMacroscopeItem {
  /** Title of item */
  title: string;
  /** Makers of the item */
  makers: Profile[];
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
  externalLink: string;
}

/**
 * Interface for language in map/macroscope items
 */
export interface Language {
  /** Abbreviation of language */
  abbreviation: string;
  /** Shorter abbreviation of language */
  abbr_short: string;
  /** Name of language in English */
  language: string;
  /** Name of language translated in that language */
  native: string;
}

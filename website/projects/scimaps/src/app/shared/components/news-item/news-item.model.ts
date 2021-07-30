/**
 * Interface for news items
 */
export interface NewsItem {

  /** Title of news item */
  title: string;

  /** Date of publication */
  date: string;

  /** Source of news item */
  publication: string;

  /** Name of institution */
  institution?: string | null;

  /** URL of thumbnail image */
  thumbnail: string;

  /** Link to PDF */
  pdfLink: string;

  sourceUrl?: string;
}

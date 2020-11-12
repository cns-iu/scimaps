/**
 * Interface for news items
 */
export interface NewsItem {

  /** Title of news item */
  title: string;

  /** Date of publication */
  date: Date;

  /** Source of news item */
  source: string;

  /** Name of institution */
  institution: string;

  /** URL of thumbnail image */
  thumbnail: string;

  /** Link to PDF */
  pdfLink: string;
}

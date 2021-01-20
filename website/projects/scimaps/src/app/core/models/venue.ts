export interface IconLink {
  icon: string;
  url: string;
}

export interface Venue {
  startDate: string;
  endDate: string;
  event: string;
  location: string;
  contact: string;
  media?: IconLink[];
}

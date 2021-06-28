export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  body: string;
  link: string;
  slug: string;
  image: string;
  roles: string[];
  region?: string;
  location_name?: string;
}

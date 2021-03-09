export interface SightItem {
  id: number;
  picture: any;
  sightName: string;
  description: string;
}
export interface CountryItem {
  id: number;
  picture: any;
  countryName: string;
  capitalName: string;
  lang: string;
  description: string;
  video: string;
  sights: Array<SightItem>
}

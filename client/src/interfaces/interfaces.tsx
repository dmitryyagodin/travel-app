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

export interface CountryItemFirebase {
  img_title: string,
  name_ru: string,
  name_en: string,
  name_es: string,
  info_ru: string,
  info_en: string,
  info_es: string,
  capital_ru: string,
  capital_en: string,
  capital_es: string,
  video: string
}

export interface Params {
  country: string;
}

export interface SearchPanelDataItem {
  handleSearchFromParent: any;
}

export interface HeaderDataItem {
  handleSearchValue: any;
}

export interface HomeItem {
  searchValue: string;
}

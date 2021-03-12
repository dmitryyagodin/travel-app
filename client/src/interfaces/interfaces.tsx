export interface SightItem {
  id: number;
  picture: any;
  sightName: string;
  description: string;
}

export interface LangItem {
  countryName: string;
  capitalName: string;
  lang: string;
  description: string;
  sights: Array<SightItem>;
}

export interface Languages {
  en: LangItem;
  ru: LangItem;
  es: LangItem;
}
export interface CountryItem {
  id: number;
  picture: any;
  video: string;
  translateTo: Languages;
}

export interface Params {
  country: string;
}

export interface SearchPanelDataItem {
  handleSearchFromParent: any;
}

export interface HeaderDataItem {
  handleSearchValue: any;
  handleLangValue: any;
}

export interface HomeItem {
  searchValue: string;
  langValue: string;
}

export interface SelectLangDataItem {
  handleLangFromParent: any;
}

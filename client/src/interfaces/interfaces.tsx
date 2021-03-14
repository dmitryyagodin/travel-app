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
  lat?: number;
  long?: number;
}

export interface ResultCountryItem {
  id: number,
  countryName: string,
  capitalName: string,
  picture: string;
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
  id: string;
}

export interface SearchPanelDataItem {
  handleSearchFromParent: any;
  langValue: string;
}

export interface HeaderDataItem {
  handleSearchValue: any;
  handleLangValue: any;
  langValue: string;
}

export interface HomeItem {
  searchValue: string;
  langValue: string;
}

export interface DetailsItem {
  langValue: string;
}

export interface ResultCountryDetailItem {
  countryName: string,
  capitalName: string,
  picture: string;
}

export interface SelectLangDataItem {
  handleLangFromParent: any;
}

export interface FooterItem {
  langValue: string;
}

export interface SignInItem {
  langValue: string;
}

export interface SignOutItem {
  langValue: string;
}

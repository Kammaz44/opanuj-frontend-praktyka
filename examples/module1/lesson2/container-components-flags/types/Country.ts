export interface Country {
  area: number;
  capitol: string;
  continents: string[];
  currencies: {
    name: string;
    symbol: string;
  }[];
  flag: string;
  flags: {
    png: string;
    svg: string;
  }
  languages: string[];
  name: {
    common?: string;
    official?: string;
    nativeName?:{
      common?: string;
      official?: string;
    }
  };
  population: number;
  region: string;
  timezones: string[];
  gender: string;
  image: string;
  created: string;
}

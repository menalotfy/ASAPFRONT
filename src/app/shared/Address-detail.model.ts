export class AddressDetail {

  ID: number=0;
  DescriptionEN: string='';
  DescriptionAR: string='';
  Description: string='';
  PostalCode: string='';
  CityName: string='';
  CountryID:number=0;
  RegionID: number=0;
  CityID: number=0;
  City:City =new City();

}
export class City {

  ID: number=0;
  NameEN: string='';
  NameAR: string='';
  Name: string='';
  RegionID: number=0;

  Region:Region =new Region();

}
export class Region {

  ID: number=0;
  NameEN: string='';
  Name: string='';
  NameAR: string='';
  CountryID: number=0;
  Country:Country =new Country();


}
export class Country {

  ID: number=0;
  NameEN: string='';
  Name: string='';
  NameAR: string='';
  DailCode: string='';


}

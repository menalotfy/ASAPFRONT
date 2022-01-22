import { AddressDetail } from './Address-detail.model';

export class PersonDetail {

    ID: number=0;
    AddressID: number=0;
    NameEN: string='';
    NameAR: string='';
    FamilyName: string='';
    Email: string='';
    Phone: string='';
    Address:AddressDetail=new AddressDetail();
    CountryID:number=0;
    RegionID: number=0;
    CityID: number=0;
}

export class Response {

  Success: boolean=false;
  Message: string='';
  StatusCode: number=0;
  Data:[];

}

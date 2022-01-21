import { AddressDetail } from './Address-detail.model';

export class PersonDetail {

    ID: number=0;
    NameEN: string='';
    NameAR: string='';
    FamilyName: string='';
    ProfileImagePath: string='';
    Email: string='';
    Phone: string='';
}

export class Response {

  Success: boolean=false;
  Message: string='';
  StatusCode: number=0;
  FamilyName: string='';
  Data:[];

}

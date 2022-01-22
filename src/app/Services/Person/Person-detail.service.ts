import { City } from './../../shared/Address-detail.model';
import { Injectable } from '@angular/core';
import { PersonDetail,Response } from 'src/app/shared/Person-detail.model';
import { HttpClient } from "@angular/common/http";
import { AddressDetail, Country, Region } from '../../shared/Address-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44364/Api/'
  formData: PersonDetail = new PersonDetail();
  list: PersonDetail[];
  response:Response=new Response();
  Address:AddressDetail[];
  FilterAddress:AddressDetail[];
  Countries:Country[];
  Regions:Region[];
 Cities:City[];
FilterRegions:Region[];
FilterCities:City[];
postPersonDetail() {
  debugger;
  return this.http.post(this.baseURL+"Person/AddPerson", this.formData);
}

putPersonDetail() {
  return this.http.post(this.baseURL+"Person/UpdatePerson", this.formData);
}

deletePersonDetail(id: number) {
  return this.http.delete(this.baseURL+"Person/DeletePerson?ID="+id);
}

  refreshList() {
    this.http.get(this.baseURL +"Person/GetAllPersons")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.list=this.response.Data as PersonDetail[];

      });

  }
  GetAddress() {
    this.http.get(this.baseURL +"Address/GetAllAddresss")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.Address=this.FilterAddress= this.response.Data as AddressDetail[];


      });

  }

  GetCountries() {
    this.http.get(this.baseURL +"Country/GetAllCountries")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.Countries=this.response.Data as Country[];

      });

  }
  GetRegions() {
    this.http.get(this.baseURL +"Region/GetAllRegions")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.Regions=this.FilterRegions= this.response.Data as Region[];


      });

  }
  GetCities() {
    this.http.get(this.baseURL +"City/GetAllCities")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.Cities=this.FilterCities=this.response.Data as City[];

      });

  }

}

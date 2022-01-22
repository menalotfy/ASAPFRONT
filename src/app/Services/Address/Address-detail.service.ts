import { City } from './../../shared/Address-detail.model';
import { Injectable } from '@angular/core';
import { AddressDetail } from 'src/app/shared/Address-detail.model';
import { Response } from 'src/app/shared//Person-detail.model';
import { HttpClient } from "@angular/common/http";
import { Country, Region } from '../../shared/Address-detail.model';

@Injectable({
  providedIn: 'root'
})
export class AddressDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44364/Api/'
  formData: AddressDetail = new AddressDetail();
  Countries:Country[];
  Regions:Region[];
  Cities:City[];
  FilterRegions:Region[];
  FilterCities:City[];
  AddressCountry:Country=new Country();
  AddressRegion:Region=new Region();
  list: AddressDetail[];
  response:Response=new Response();

  postAddressDetail() {
    debugger;
    return this.http.post(this.baseURL+"Address/AddAddress", this.formData);
  }

  putAddressDetail() {
    return this.http.post(this.baseURL+"Address/UpdateAddress", this.formData);
  }

  deleteAddressDetail(id: number) {
    return this.http.delete(this.baseURL+"Address/DeleteAddress?ID="+id);
  }

  refreshList() {
    this.http.get(this.baseURL +"Address/GetAllAddresss")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.list=this.response.Data as AddressDetail[];


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
    this.http.get(this.baseURL +"Region/GetAllRegions ")
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

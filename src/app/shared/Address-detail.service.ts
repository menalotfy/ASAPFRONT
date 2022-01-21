import { Injectable } from '@angular/core';
import { AddressDetail } from './Address-detail.model';
import { Response } from './Person-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddressDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44364/Api/Address/'
  formData: AddressDetail = new AddressDetail();
  list: AddressDetail[];
  response:Response=new Response();

  postAddressDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putAddressDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.ID}`, this.formData);
  }

  deleteAddressDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL +"GetAllAddresss")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.list=this.response.Data as AddressDetail[];

      });

  }


}

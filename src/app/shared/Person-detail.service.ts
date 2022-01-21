import { Injectable } from '@angular/core';
import { PersonDetail, Response } from './Person-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44364/Api/Person/'
  formData: PersonDetail = new PersonDetail();
  list: PersonDetail[];
  response:Response=new Response();

  postPersonDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPersonDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.ID}`, this.formData);
  }

  deletePersonDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL +"GetAllPersons")
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;

        this.list=this.response.Data as PersonDetail[];

      });

  }


}

import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/Services/Person/Person-detail.service';
import { NgForm } from '@angular/forms';
import { PersonDetail } from 'src/app/shared/Person-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Person-detail-form',
  templateUrl: './Person-detail-form.component.html',
  styles: [
  ]
})
export class PersonDetailFormComponent implements OnInit {

  constructor(public service: PersonDetailService,

    private toastr: ToastrService) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.ID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  FilterRegion()
  {
    debugger
    if(this.service.formData.CountryID)
   this.service.FilterRegions=this.service.Regions.filter(x=>x.CountryID== this.service.formData.CountryID);
  }
  FilterCity()
  {
    debugger
    if(this.service.formData.RegionID)
   this.service.FilterCities=this.service.Cities.filter(x=>x.RegionID== this.service.formData.RegionID);
  }
  FilterAddress()
  {
    debugger
    if(this.service.formData.CityID)
   this.service.FilterAddress=this.service.Address.filter(x=>x.CityID== this.service.formData.CityID);
  }
  insertRecord(form: NgForm) {
    this.service.postPersonDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Person Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPersonDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Person Detail Register')
      },
      err => { console.log(err); }
    );
  }

  reset(){
    this.service.formData = new PersonDetail();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PersonDetail();
  }

}

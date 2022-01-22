import { Component, OnInit } from '@angular/core';
import { AddressDetailService } from 'src/app/Services/Address/Address-detail.service';
import { NgForm } from '@angular/forms';
import { AddressDetail } from 'src/app/shared/Address-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Address-detail-form',
  templateUrl: './Address-detail-form.component.html',
  styles: [
  ]
})
export class AddressDetailFormComponent implements OnInit {
  constructor(public service: AddressDetailService,
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
    if(this.service.formData.RegionID)
   this.service.FilterCities=this.service.Cities.filter(x=>x.RegionID== this.service.formData.RegionID);
  }
  insertRecord(form: NgForm) {
    this.service.postAddressDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Address Detail Add')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putAddressDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Address Detail')
      },
      err => { console.log(err); }
    );
  }

  reset(){
    this.service.formData = new AddressDetail();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AddressDetail();
  }

}

import { Component, OnInit } from '@angular/core';
import { AddressDetailService } from '../Services/Address/Address-detail.service';
import { AddressDetail } from '../shared/Address-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Address-details',
  templateUrl: './Address-details.component.html',
  styles: [
  ]
})
export class AddressDetailsComponent implements OnInit {

  constructor(public service: AddressDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.GetCountries();
    this.service.GetRegions();
    this.service.GetCities();
    console.log("this list");
    console.log(this.service.Countries);

  }

  populateForm(selectedRecord: AddressDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteAddressDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Address Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }

}

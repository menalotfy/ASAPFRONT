import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from '../Services/Person/Person-detail.service';
import { PersonDetail } from '../shared/Person-detail.model';
import { ToastrService } from 'ngx-toastr';
import { AddressDetailService } from '../Services/Address/Address-detail.service';
import { AddressDetail } from '../shared/Address-detail.model';

@Component({
  selector: 'app-Person-details',
  templateUrl: './Person-details.component.html',
  styles: [
  ]
})
export class PersonDetailsComponent implements OnInit {

  constructor(public service: PersonDetailService,


    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    debugger
    this.service.GetCountries();
    this.service.GetRegions();
    this.service.GetCities();
    this.service.GetAddress();

  }

  populateForm(selectedRecord: PersonDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePersonDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Person Detail ');
          },
          err => { console.log(err) }
        )
    }
  }

}

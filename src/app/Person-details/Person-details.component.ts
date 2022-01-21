import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from '../shared/Person-detail.service';
import { PersonDetail } from '../shared/Person-detail.model';
import { ToastrService } from 'ngx-toastr';

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
            this.toastr.error("Deleted successfully", 'Person Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }

}

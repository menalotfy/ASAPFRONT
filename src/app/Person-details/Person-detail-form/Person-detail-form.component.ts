import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/Person-detail.service';
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


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PersonDetail();
  }

}

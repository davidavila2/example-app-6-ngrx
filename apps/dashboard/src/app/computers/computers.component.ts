import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Computer, ComputerService, NotifyService, emptyComputer } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers$;
  selectedComputer: Computer;
  form: FormGroup;

  constructor(private computersService: ComputerService, private formBuilder: FormBuilder, private notify: NotifyService) { }

  resetComputer() {
    this.form.reset();
    this.selectComputer(emptyComputer);
    // Marks errors null for each form control.
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  ngOnInit() {
    this.getComputers();
    this.initForm();
    this.resetComputer();
  }

  selectComputer(computer: Computer) {
    this.selectedComputer = computer;
    this.form.patchValue(computer);
  }

  getComputers() {
    this.computers$ = this.computersService.all();
  }

  saveComputer() {
    if (!this.form.value.id) {
      this.createComputer();
    } else {
      this.updateComputer();
    }
  }

  updateComputer() {
    this.computersService.update(this.form.value)
      .subscribe(() => {
        this.getComputers();
        this.resetComputer();
      });
      this.notify.notification(`You have updated ${this.form.value.title}`);
  }

  createComputer() {
    this.computersService.create(this.form.value)
      .subscribe(() => {
        this.getComputers();
        this.resetComputer();
      });
      this.notify.notification(`You have created ${this.form.value.title}`);
  }

  deleteComputer(computer) {
    this.computersService.delete(computer.id)
      .subscribe(() => this.getComputers());
      this.notify.notification(`You have deleted ${computer.title}`);
  }

  cancel() {
    this.resetComputer();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: ['', Validators.compose([Validators.required])],
      approved: ['', Validators.compose([Validators.required])]
    });
  }
}
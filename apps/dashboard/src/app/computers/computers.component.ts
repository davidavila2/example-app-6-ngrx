import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Computer, NotifyService, emptyComputer } from '@dashboard/core-data';
import { ComputersFacade } from '@dashboard/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  form: FormGroup;
  selectedComputer: Computer;
  computers$: Observable<Computer[]> = this.computersFacade.allComputers$;

  constructor(
    private computersFacade: ComputersFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.initForm();
    this.computersFacade.loadComputers();
    this.computersFacade.mutations$.subscribe(() => this.resetComputer())
  }

  selectComputer(computer: Computer) {
    this.selectedComputer = computer;
    this.form.patchValue(computer);
  }

  saveComputer(computer: Computer) {
    if (computer.id) {
      this.computersFacade.updateComputer(this.form.value);
      this.notify.notification(`You have updated ${this.form.value.title}`);
      return
    } else {
      this.computersFacade.createComputer(this.form.value);
      this.notify.notification(`You have updated ${this.form.value.title}`);
    }
  }

  deleteComputer(computer: Computer) {
    this.computersFacade.deleteComputer(computer)
  }


  resetComputer() {
    this.form.reset();
    this.selectComputer(emptyComputer);
    // Marks errors null for each form control.
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: [''],
      approved: ['']
    });
  }
}
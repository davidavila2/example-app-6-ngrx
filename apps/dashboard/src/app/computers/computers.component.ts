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
    this.computersFacade.mutations$.subscribe(() => this.resetComputer());
  }

  resetComputer() {
    this.form.reset();
    this.selectComputer(emptyComputer);
    // Marks errors null for each form control.
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  selectComputer(computer: Computer) {
    this.computersFacade.selectComputer(computer.id);
    this.selectedComputer = computer;
    this.form.patchValue(computer);
  }

  createComputer() {
    this.notify.notification(`You have created ${this.form.value.title}`);
    this.computersFacade.createComputer(this.form.value);
  }

  updateComputer() {
    this.notify.notification(`You have updated ${this.form.value.title}`);
    this.computersFacade.updateComputer(this.form.value);
  }

  saveComputer(computer: Computer) {
    if (computer.id) {
      this.updateComputer();
    } else {
      this.createComputer();
    }
  }

  deleteComputer(computer: Computer) {
    this.notify.notification(`You have deleted ${computer.title}`);
    this.computersFacade.deleteComputer(computer);
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
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '@dashboard/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dashboard-computers-details',
  templateUrl: './computers-details.component.html',
  styleUrls: ['./computers-details.component.scss']
})
export class ComputersDetailsComponent {
  @Input() set computer(value) {
    if (value) this.originalTitle = value.title;
    this.currentComputer = Object.assign({}, value)
  }
  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  currentComputer: Computer;
  originalTitle;
}

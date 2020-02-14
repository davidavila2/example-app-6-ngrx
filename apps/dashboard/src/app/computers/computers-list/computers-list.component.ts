import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-computers-list',
  templateUrl: './computers-list.component.html',
  styleUrls: ['./computers-list.component.scss']
})
export class ComputersListComponent {
  @Input() computers: Computer[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

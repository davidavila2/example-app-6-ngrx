import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Computer } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-computers-list',
  templateUrl: './computers-list.component.html',
  styleUrls: ['./computers-list.component.scss']
})
export class ComputersListComponent implements OnInit {
  @Input() computers: Computer[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  ngOnInit() {
    
  }
}

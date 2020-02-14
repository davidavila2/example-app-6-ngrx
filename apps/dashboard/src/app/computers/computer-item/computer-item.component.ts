import { Component, OnInit } from '@angular/core';
import { ComputerService } from '@dashboard/core-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-computer-item',
  templateUrl: './computer-item.component.html',
  styleUrls: ['./computer-item.component.scss']
})
export class ComputerItemComponent implements OnInit {
  _computer$;
  public get computer$() {
    return this._computer$;
  }
  public set computer$(value) {
    this._computer$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private computersService: ComputerService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.computer$ = this.computersService.findOne(id);
    })
  }

  goBackToComputers() {
    this.router.navigate(['/computers']);
  }
}

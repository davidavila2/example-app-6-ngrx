import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Computers App';

  links = [
    { path: '/projects', icon: 'work', title: 'Projects' },
  ]
}

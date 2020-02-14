import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@dashboard/ui-library';
import { ComputersComponent } from './computers/computers.component';
import { ComputerItemComponent } from './computers/computer-item/computer-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'computers', component: ComputersComponent },
  { path: 'computers/:id', component: ComputerItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
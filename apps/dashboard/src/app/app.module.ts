import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';


import { MaterialModule } from '@dashboard/material';
import { CoreDataModule } from '@dashboard/core-data';
import { UiLibraryModule } from '@dashboard/ui-library';
import { CoreStateModule } from '@dashboard/core-state'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputerItemComponent } from './computers/computer-item/computer-item.component';
import { ComputersDetailsComponent } from './computers/computers-details/computers-details.component';
import { ComputersListComponent } from './computers/computers-list/computers-list.component';
import { ComputersComponent } from './computers/computers.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [AppComponent, ComputerItemComponent, ComputersDetailsComponent, ComputersListComponent, ComputersComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

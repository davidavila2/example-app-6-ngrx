import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComputerService } from './computers/computer.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class CoreDataModule {}

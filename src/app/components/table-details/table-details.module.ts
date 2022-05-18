import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDetailsComponent } from './table-details.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TableDetailsComponent
  ]
})
export class TableDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TableModule } from 'src/app/components/table/table.module';
import { TableDetailsModule } from 'src/app/components/table-details/table-details.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    TableModule,
    TableDetailsModule,
  ]
})
export class HomeModule { }

import { Component, OnInit } from '@angular/core';
import { CustomerRecord, CUSTOMER_RECORDS } from 'src/app/constants/customer-records';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public records: CustomerRecord[] = CUSTOMER_RECORDS;
  
  constructor() { }

  ngOnInit(): void {
  }

}

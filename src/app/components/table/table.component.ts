import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerRecord, CUSTOMER_RECORDS } from 'src/app/constants/customer-records';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public records = CUSTOMER_RECORDS;
  public displayedColumns = ['FirstName', 'LastName', 'Age', 'Details'];

  @Output() rowSelected = new EventEmitter<CustomerRecord>();
  constructor() { }

  ngOnInit(): void {
    this.records = this.records.sort((a, b) => a.Age > b.Age ? 1 : -1)
  }

  public viewDetails(row: CustomerRecord) {
    this.rowSelected.emit(row);
  }
}

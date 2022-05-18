import { Component, Input, OnInit } from '@angular/core';
import { CustomerRecord } from 'src/app/constants/customer-records';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {

  @Input() record: CustomerRecord | null = null;;

  constructor() { }

  ngOnInit(): void {
  }

}

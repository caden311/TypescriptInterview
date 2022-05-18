import { Component, OnInit } from '@angular/core';
import { CustomerRecord } from 'src/app/constants/customer-records';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selectedRecord: CustomerRecord | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  public rowSelected(row: CustomerRecord) {
    this.selectedRecord = row;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  rows=1;
  cols=3
  constructor() { }

  ngOnInit(): void {
  }

}

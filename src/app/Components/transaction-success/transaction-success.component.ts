import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-success',
  templateUrl: './transaction-success.component.html',
  styleUrls: ['./transaction-success.component.scss']
})
export class TransactionSuccessComponent implements OnInit {
  @Input() SuccessData:any;

  constructor() { }

  ngOnInit(): void {
  }

}

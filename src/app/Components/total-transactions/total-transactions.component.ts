import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-transactions',
  templateUrl: './total-transactions.component.html',
  styleUrls: ['./total-transactions.component.scss']
})
export class TotalTransactionsComponent implements OnInit {
  @Input() TotalData:any
  constructor() { }

  ngOnInit(): void {
  }

}

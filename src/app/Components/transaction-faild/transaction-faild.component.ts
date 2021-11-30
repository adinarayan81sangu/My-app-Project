import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-faild',
  templateUrl: './transaction-faild.component.html',
  styleUrls: ['./transaction-faild.component.scss']
})
export class TransactionFaildComponent implements OnInit {
  @Input() FaildData:any;
  constructor() { }

  ngOnInit(): void {
  }

}

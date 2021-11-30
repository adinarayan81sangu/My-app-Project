import { Component, OnInit } from '@angular/core';
import { TransactionDataService } from 'src/app/Services/transaction-data.service';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.scss']
})
export class HompageComponent implements OnInit {
  ToatalTransactons:any;
  FaildTransactons:any;
  SuccessTransactons:any;
  constructor(public Tdata:TransactionDataService) { }

  ngOnInit(): void {
    this.Tdata.getAllData().subscribe((res)=>{
      this.ToatalTransactons=res;
    });
    this.Tdata.FaildData().subscribe((res)=>{
      this.FaildTransactons=res;
    });
    this.Tdata.SuccessData().subscribe((res)=>{
       this.SuccessTransactons=res;
      // console.log(this.SuccessTransactons);
    });
  }

}

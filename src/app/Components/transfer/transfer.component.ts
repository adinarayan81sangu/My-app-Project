import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from 'src/app/Services/table-data.service';
export interface PeriodicElement {
  id:number;
  FirstName: string;
  LastName: string;
  AccountNumber: number;
  ConfirmAccount: number;
  BankName:string;
  IFSC:string;
  BranchName:string;
  Remarks:string

}

const ELEMENT_DATA: PeriodicElement[] = [
  // {id: 1, FirstName: 'Adi', LastName:'sangu', AccountNumber:123456789012,ConfirmAccount:123456789012,BankName:'HitechCity',IFSC:'AfD123',BranchName:'Kondpur',Remarks:'supert' },
  // {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
 
  
];

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'AccountNumber','ConfirmAccount','BankName','IFSC','BranchName','Remarks'];
  ELEMENT_DATA:any;
  dataSource:any
  userDetails:FormGroup;
  constructor( private tb:TableDataService,private fb:FormBuilder) { 
    this.userDetails=this.fb.group(
    {
      FirstName:['',[Validators.required]],
      LastName :['',[Validators.required]],
      AccountNumber:['',[Validators.required]],
      ConfirmAccount:['',[Validators.required]],
      BankName: ['', [Validators.required]],
      IFSC:['',[Validators.required]],
      BranchName:['',[Validators.required]],
      Remarks:['',[Validators.required]]

    }
  )
  }

  ngOnInit(): void {
    this.getData();
  }
  onSubmit(){
//  this.tb.postData(this.userDetails).subscribe((res)=>{
//             console.log(res);
//  })
console.log(this.userDetails)
  }
  
   getData(){
     this.tb.GetTableData().subscribe((res)=>{
      this. dataSource=res;
      console.log(this.dataSource);
      
     })
   }

}

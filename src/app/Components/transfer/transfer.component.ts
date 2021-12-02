import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/Services/custom-validator.service';
import { TableDataService } from 'src/app/Services/table-data.service';
// import { ConfirmedValidator } from './match';
export interface PeriodicElement {
  id: number;
  FirstName: string;
  LastName: string;
  AccountNumber: number;
  ConfirmAccount: number;
  BankName: string;
  IFSC: string;
  BranchName: string;
  Remarks: string

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

  cols = 3;
  rows = 1;
  submitted:boolean=false;
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'AccountNumber', 'ConfirmAccount', 'BankName', 'IFSC', 'BranchName', 'Remarks'];
  ELEMENT_DATA: any;
  dataSource: any
  userDetails: FormGroup;
  accNo:string='ABCD';
  constructor(private tb: TableDataService, private fb: FormBuilder,private custom:CustomValidatorService) {
    this.userDetails = this.fb.group(
      {
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        AccountNumber: ['', Validators.required],
        ConfirmAccount: ['', Validators.required],
        BankName: ['', Validators.required],
        IFSC: ['', Validators.required],
        BranchName: ['', Validators.required],
        Remarks: ['', Validators.required]

      }, {
        validator:this.custom.MatchAccount('AccountNumber','ConfirmAccount')
      }
    )
  }

  ngOnInit() {
    this.getData();

  }
  onSubmit(userDetails: FormGroup, formGroupDirective: FormGroupDirective) {
    this.tb.postData(this.userDetails.value).subscribe((res) => {
      this.getData()
    })
    // console.log("form", this.userDetails.value);
    this.userDetails.reset();
    formGroupDirective.resetForm();
    this.submitted=true;
  }
  get f() {
    return this.userDetails.controls;
  }


  getData() {
    this.tb.GetTableData().subscribe((res) => {
      this.dataSource = res;
      // console.log(this.dataSource);

    })
  }

}

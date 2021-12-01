import { Injectable } from '@angular/core';
import { FormGroup,AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  MatchAccountNumber(AccountNumber:string,ConfirmAccount:string){
      return(formgroup:FormGroup)=>{
        const AccountControl=formgroup.controls[AccountNumber];
        const ConfirmControl=formgroup.controls[ConfirmAccount];
        if(ConfirmControl.errors && !ConfirmControl.errors['MatchAccountNumber']){
           return;
        } if (AccountControl.value !== ConfirmControl.value) {
          ConfirmControl.setErrors({ confirmedValidator: true });
      } else {
        ConfirmControl.setErrors(null);
      }
      }
  }
  

  constructor() { }
}

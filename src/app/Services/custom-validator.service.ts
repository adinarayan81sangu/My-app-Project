import { Injectable } from '@angular/core';
import { FormGroup,AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  MatchAccount(AccountControl:string,ConfirmControl:string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[AccountControl];
      const matchingControl = formGroup.controls[ConfirmControl];
      if (matchingControl.errors) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MatchAccount: true });
    } else {
        matchingControl.setErrors(null);
    }

    }
  }
  

  constructor() { }
}

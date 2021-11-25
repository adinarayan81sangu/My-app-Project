import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,public route:Router) {
  this.loginForm=this.fb.group(
    {
      username:['',Validators.required],
      password:['',Validators.required]
    }
  )
   }
  onSubmit(){
    console.log(this.loginForm.value);
    this.route.navigate(["Dashboard"])
    
   }
  ngOnInit(): void {
  }

}

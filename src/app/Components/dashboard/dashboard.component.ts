import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isShowing: boolean=true;
  constructor() { }
  toggleSidenav(data:boolean) {
this.isShowing=data
  
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isShowing: boolean=true;
  constructor() { }
  toggleSidenav() {
    if(this.isShowing)
     this.isShowing = false;
     else if(!this.isShowing)
     this.isShowing = true;
  }
  ngOnInit(): void {
  }

}

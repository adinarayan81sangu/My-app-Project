import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isShowing = new EventEmitter()

  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidenav() {
    if (this.show)
      this.show = false;
    else
      this.show = true;
    this.isShowing.emit(this.show);

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html',
  styles: [
    `ul.nav>li>.highlight  {
        color: #ff6771; !important
    } `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

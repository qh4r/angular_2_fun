import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pg-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  counter = 1;

  onClick() {
    this.counter = (this.counter + 1) % 4;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

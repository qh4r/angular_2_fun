import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <p>
      bindingssss {{someString}}
    </p>
  `,
  styles: []
})
export class DatabindingComponent implements OnInit {

  someString = "tekst jakis tam";
  someNumber = 1337;

  constructor() { }

  ngOnInit() {
  }

}

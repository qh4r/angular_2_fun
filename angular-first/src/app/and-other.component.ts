import { Component, OnInit } from '@angular/core';

// ng g c and-other --flat -is -it

// flat - nie tworzy osobnego folderu
// is - inline styles
// it - inline templates

let localShared = 0;

// dekorator dla klasy
@Component({
  selector: 'and-other',
  template: `
    <p>
      and-other Works! {{number}}
    </p>
  `,
  styles: []
})
export class AndOtherComponent implements OnInit {

  public number : number;

  constructor() { }

  ngOnInit() {
    this.number = localShared;
    console.log(localShared++);
  }

}

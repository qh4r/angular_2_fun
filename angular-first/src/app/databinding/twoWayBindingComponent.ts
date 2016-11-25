import {Component} from '@angular/core';

// lepsze podejscie od 2 way bindingu to reakcja na event + binding jednostronny -  przyklad w databindings.component.ts
@Component({
  selector: 'app-2way-binding',
  template: `
    <h1>W 2 STRONY</h1>
    <p>
      <input type="text" [(ngModel)]="car.producer">
      
      <input type="text" [(ngModel)]="car.year" />
       
      <button (click)="print()">Drukuj</button>
          
    </p>
    <ul>
        <li>
            {{car.producer}}
        </li>
        <li>
            {{car.year}}
        </li>  
    </ul>
  `,
  styles: []
})
export class TwoWayBindingComponent {
  car = {
    producer: 'Audi',
    year: 2008
  }

  print() {
    console.log(this.car);
  }
}

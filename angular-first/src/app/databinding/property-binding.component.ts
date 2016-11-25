// ng g c property-binding -is -it --flat

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
    {{result}}
    </p>
    <p>
    {{diff}}
</p>
  `,
  styles: []
})
export class PropertyBindingComponent {
  // to sprawia ze ten komponen wystawia ta properte
  // - mozna sie do niej odwolac przez [result] na tagu
  @Input() result: number = 0;

  // parametr nadpisuje properte ktora bedzie dostepna na zewnatz
  @Input('bag') diff: string = ""; // wewnatrz to diff ale na zewnatrz bag
}

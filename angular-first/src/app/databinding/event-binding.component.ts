// ng g c event-binding -is -it --flat

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">
      No naciś
    </button>
  `,
  styles: [`
    button {
        padding: 10px;
        color: #EEE;
        border-radius: 8px;
        background-color: #7fd6ff;
        font-size: 1.5em;
        font-family: Arial sans-serif;
        transition: all 1s;
    }
    button:hover {
        background-color: #66a6cc;
    }
`]
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  // parametr nadpisuje properte ktora bedzie dostepna na zewnatz
  @Output('missClicked') notClicked = new EventEmitter<string>();

  onClicked() {
    //!! emitowane dane mozna wyciagnac w handlerze parametrem $event!!!!!!
    this.clicked.emit("działaaaaaa");
  }
}

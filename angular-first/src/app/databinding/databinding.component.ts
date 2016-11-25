import {Component, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-databinding',
  //highlight - tutaj nazwa klasy ktorej obecnoscia chcemy sterowac
  // po prawej warunek ktory ma byc spelniony jesli ma bic aktywna
  template: `
    <p [ngClass]="{highlight: (someNumber % 2) == 0}">
      bindingssss {{someString}}
    </p>
    <input [ngStyle]="{fontFamily: 'serif', color: 'blue' }" type="text" [value]="userInput" (keyup)="inputChanged($event)"/> <!-- $event to wbudowany typ do rpzekazywania parametrow w ng2-->
                                        <!--  change dziala po utracie focusa keyup dziala po wcisnieciu kazdym -->
    
    <button (click)="log(someNumber, userInput)" >Ciś</button>
  
    <app-property-binding [result]="userInput" [bag]="'testy testy'"></app-property-binding>
    <!-- '' wewnatrz " to sposob na bezposrednie rpzekazanie wrtosci. bag tutaj przyslania diff - nie mozna uzywac diff -->
    <app-event-binding (clicked)="handleClic($event)"></app-event-binding>
    
    <app-2way-binding></app-2way-binding>
  `,
  // $event - to sposob na wyciagniecie danych z eventu
  // [] - property bindingi!
  styles: [`
    button {    
        display: inline;
        background-color: #ff5463;
        color: #EEE;
        width: 10%;
        padding: 5px 10px;
        border-radius: 8px;
    }    
    input[type=text] {
        width: 50%;
        margin: auto 10px;
    }
    p.highlight {
        color: greenyellow;
    }
    `]
  // da sie dodawac inouts i outputs
  // w tym miejscu
  // ale to bad practice
})
export class DatabindingComponent implements OnInit {


  private userInput = "user tekst";
  someString = "tekst jakis tam";
  someNumber = 1337;

  // output i input tylko jak na zwnatrz komponenntu ma byc mozliwy binding
  // @Output()
  log(x, input) {
    console.log(`Test ${x} : ${this.userInput} :  ${input}`);
    this.someNumber++;
  }

  handleClic(msg) {
    console.log(msg);
  }

  inputChanged(e) {
    this.userInput = e.target.value;
  }

  constructor() {
  }

  // wywoluje sie przy pierwszym inicie
  ngOnInit() {
  }

}

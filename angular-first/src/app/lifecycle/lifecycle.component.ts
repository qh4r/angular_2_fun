import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p #mainParagraph>
      lifecycle Works!
      <input type="text" [(ngModel)]="slowo"/>
    <span class="large" #numSpan>{{num}}</span>  
         <!-- do tych zmiennych odnosic sie mozna tylko w templacie -->
    </p>
    <p>{{numSpan.textContent}}</p>
    <button (click)="colorIt()">zmien co</button>
    
    <ng-content>
        
    </ng-content>
    <!-- innerText tez dziala -->
  `,
  styles: ['span{color:red}', 'p:last-of-type {color: aquamarine}', '.colored {background-color: #ffc93a; color: aqua}', '.large { font-size: 1.5rem }']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  slowo: string = "dupa";

  @Input() num: number = 0;

  @ViewChild('numSpan')
  numSpan : any;

  @ContentChild('injectedContent')
  injectedContent : any;

  // wywolywane podczas inicjalizacji komponentu
  ngOnInit() {
    this.print('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.print('onChanges', changes);
  }

  ngDoCheck(): void {
    this.print('doCHeck');
  }

  ngAfterContentChecked(): void {
    this.print('afterContentCheck');
  }

  ngAfterContentInit(): void {
    this.print('afterContentInit');
  }

  ngAfterViewChecked(): void {
    this.print('afterViewChecked');
  }

  ngAfterViewInit(): void {
    this.print('afterViewInit');
  }

  ngOnDestroy(): void {
    this.print('onDestroy');
  }

  colorIt(){
    // Object.keys(this.numSpan.nativeElement).forEach(console.log);
    this.numSpan.nativeElement.classList.toggle('colored'); // niestety troche zjebane
    // powinien byc HTMLElement a nie any ale nativeElement wrapuje wszystko

    //lepiej nie zuywac za bardzo

    // to samo ale z contentem wstrzykiwanym do tego komponentu - ciekawsze
    console.log(this.injectedContent);
    this.injectedContent.nativeElement.classList.toggle('large'); // nie zadziala dla contentu bo shadow dom ;c

  }

  constructor() {
  }

  private print(msg, ...rest) {
    rest != null && rest.length ? console.log(`lifecycle cpt: ${msg}`, Object.keys(rest).reduce((sum, key)=> {
      sum[key] = rest[key];
      return sum;
    }, {}))
      : console.log(`lifecycle cpt: ${msg}`);

  }
}

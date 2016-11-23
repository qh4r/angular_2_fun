import {Component} from '@angular/core'

@Component({
  selector: 'ng-test',
  template: `
    <div>
    <h1>Cur nuptia experimentum?</h1>
    <p>The old rum cowardly burns the parrot. {{shout}}</p>
    <app-other></app-other>
    <p>z testu</p>
</div>
`,
  styles: [`
    p {
      color: #4588DA;
      font-family: Helvetica Arial sans-serif;
      font-size: 1rem;
    }
    h1 {
      font-family: Helvetica Arial sans-serif;
      font-size: 1.5rem;
    }
`]  // styles przyjmuje tylko tabele!!!!
})

export class TestComponent {
  shout = 'Harrrrrr';
}



import { Component } from '@angular/core';
import {LogService} from './log.service';
import {DataStoreService} from './data-store.service';


// providery sa tworzone dla danego komponentu jako osobne instancje
// + dodatkowo sa dziedziczone jako  singletone
// swego rodzaju dla komponentow urzytych wewnatrz danego komponentu lub modułu
@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  providers: [LogService, DataStoreService]
})
export class AppComponent {
}

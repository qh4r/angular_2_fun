import {Component, OnInit} from '@angular/core';
import {LogService} from '../log.service';
import {DataStoreService} from '../data-store.service';
import {Note} from '../note';

// providery sa tworzone dla danego komponentu jako osobne instancje
// + dodatkowo sa dziedziczone jako  singletone
// swego rodzaju dla komponentow urzytych wewnatrz danego komponentu lub modułu
@Component({
  selector: 'pg-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})

export class InputsComponent implements OnInit {

  private newNote: string = '';

  public get note(): string {
    return this.newNote;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    this.store.addNote(new Note(this.newNote));
    this.newNote = ''
  }

  onInput(e) {
    this.newNote = e.target.value;
  }

  constructor(private logService: LogService, private store: DataStoreService) {
    this.logService.writeToLog('zainicjalizowano imputy');
  }

  ngOnInit() {
  }

}

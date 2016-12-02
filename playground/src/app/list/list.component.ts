import { Component, OnInit } from '@angular/core';
import {LogService} from '../log.service';
import {Note} from '../note';
import {DataStoreService} from '../data-store.service';

@Component({
  selector: 'pg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  onDelete(note){
    this.store.removeNote(note);
  }

  private notesList : Note[] = [];

  get notes() {
    return this.notesList;
  }

  constructor(private logService: LogService, private store: DataStoreService) {
    this.logService.writeToLog('zainicjalizowano liste');
  }

  ngOnInit() {
    this.notesList = this.store.notesList;
    this.store.noteWatch$.subscribe(notes => {
      this.notesList = notes;
    });
  }

}

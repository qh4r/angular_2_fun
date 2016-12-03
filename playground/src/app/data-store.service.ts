// import {Observable, Observer} from 'rxjs';
// lepsze wyjscie
import {Observable, BehaviorSubject} from 'rxjs';
import {Note} from './note';
// import 'rxjs/add/operator/share';
import {LogService} from './log.service';
import {Injectable} from "@angular/core";

// injectable jest konieczne by dalo sie tu wstrzyknac inne serwisy
// w tym wypadku LogService
@Injectable()
export class DataStoreService {
  private notes: Note[] = [];


  // prostsze rozwiazanie to uzycie eventEmmitera ale to bad practice
  // wtedy robimy emit i subscribgit e po drugiej stronie na EventEmmiterze
  noteWatch$: Observable<Note[]>;
  // _observer: Observer<Note[]>;

  notesBehavior = new BehaviorSubject<Note[]>(null);

  get notesList() {
    return this.notes;
  }

  addNote(note: Note) {
    this.logService.writeToLog(`dodano notatke ${note.text}`);
    this.notes = [note, ...this.notes];
    this.notifyChange(this.notes);
  }

  removeNote(note: Note) {
    this.logService.writeToLog(`usunieto notatke ${note.text}`);
    this.notes = this.notes.filter(n => n != note);
    this.notifyChange(this.notes);
  }

  notifyChange(notes: Note[]) {
    // this._observer.next(notes)
    this.notesBehavior.next(notes);
  }

  constructor(private logService: LogService) {
    this.noteWatch$ = this.notesBehavior.asObservable();
    // behavior to czystzse wyjscie
    // this.noteWatch$ = Observable.create(observer => that._observer = observer);
    // this.noteWatch$.share();
    this.logService.writeToLog('zainicjalizowano data store');
  }
}


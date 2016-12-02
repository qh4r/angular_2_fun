import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  writeToLog(text: string){
    console.log(`LOGGED: ${text}`)
  }

  constructor() { }

}

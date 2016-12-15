import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pg-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  lowercaseText = "Król karol kupił królowej Karolinie";
  date = new Date;
  tabular = ["duży pies", "mały pies", "czarna krowa", "duży byk", "smok", "duża kaczka"]

  newElem = '';

  onInput({target: {value}}) {
     this.newElem = value;
  }

  addElem(){
    // this.tabular.push(this.newElem);
    this.tabular = [...this.tabular, this.newElem];
    this.newElem = '';
  }

  asyncVal : Promise<number>;

  newPromise = (function(){
    let i = 0;
    return function(){
      this.asyncVal = new Promise<number>(resolve => {
        setTimeout(() => {
          resolve(i++);
        }, 2000);
      })
    }
  })();
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  lowercaseText = "Król karol kupił królowej Karolinie";
  date = new Date;
}

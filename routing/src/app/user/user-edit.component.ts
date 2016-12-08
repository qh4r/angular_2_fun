import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";

@Component({
  selector: 'r-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {
  canDeactivate() {
    console.log('attempt', this.isDone);
    return !this.isDone ? confirm('czy napewno?') : true;
  }

  constructor(private router: Router) { }

  isDone: boolean = false;

  onChanged(e){
    this.isDone = e.target.checked;
    console.log(this.isDone);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}

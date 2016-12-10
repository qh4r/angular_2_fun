import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fm-template-drivern',
  templateUrl: './template-drivern.component.html',
  styleUrls: ['./template-drivern.component.css']
})
export class TemplateDrivernComponent implements OnInit {
  user = {
    username: 'Rafał',
    email: '',
    password:'',
    gender: 'mężczyzna'
  };

  gender = [
    'mężczyzna',
    'kobieta'
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form, form.form.value, form.valid);
  }

}

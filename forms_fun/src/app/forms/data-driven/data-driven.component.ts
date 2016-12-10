import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, AbstractControl} from "@angular/forms";

@Component({
  selector: 'fm-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  userForm : FormGroup;
  genders = [
    'chłopiec',
    'dziewczynka'
  ];
  submit() {
    console.log('submit', this.userForm);
  }

  addHobby(){
    let hobbies = <FormArray>this.userForm.controls['hobbies'];
    // if(hobbies.controls[hobbies.length - 1].value) {
      hobbies.push(new FormControl('', Validators.required))
    // }
  }

  constructor() {
    this.userForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Rafał', [Validators.required]), // wartosc, walidator
        ['email'] : new FormControl('', [Validators.required, Validators.pattern('[^@ ]+@[^. ]+\.[a-z]{2,3}')]),
      }),
      'password': new FormControl('', [Validators.required]), // mozna uzywac stringow ale nie trzeba
      'gender': new FormControl('chłopiec'),
       hobbies: new FormArray([
         new FormControl('Cokaine', Validators.required)
       ])
    });
  }

  ngOnInit() {
  }

}

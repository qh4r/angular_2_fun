import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, AbstractControl, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'fm-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css'],
})
export class DataDrivenComponent implements OnInit {
  oldUserForm: FormGroup;
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

  // sprawdza obecnosc slowa test - test sprawi ze bedzie blad
  customValidator(control: FormControl) : {[s: string] : boolean} {// zwraca obiekt posiadajacy klucz string bedacy boolem
    if(control.value == "Test") {
      return {example: true}; // jesli zwroci sie cokolwiek innego niz null lub undefined to validacja sie nie powiedzie
    }

  }

  asyncCustomValidator(control: FormControl) : any {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(control.value);
        control.value == "Haszysz" ? resolve({dupa: true}) : resolve(null); // orpocz zwracania promisa dziala DOKLANDIE tak samo
        // obecnsc slowa spowoduje blad - null/undefined - to poprawna walidacja
      }, 1000);
    })
  }
  constructor(private formBuilder: FormBuilder) {
    this.oldUserForm = new FormGroup({
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

    // znacznie lepszy sposob
    this.userForm = formBuilder.group({
      userData: formBuilder.group({
        username: ['Rafał', [Validators.required, this.customValidator]], // mozna przekazac zamiast obiektu FormCOntrol tablice
        ['email'] : ['', [Validators.required, Validators.pattern('[^@ ]+@[^. ]+\.[a-z]{2,3}')]],
      }),
      'password': ['', [Validators.required]],
      'gender': ['chłopiec'],
      hobbies: formBuilder.array([
        new FormControl('Cokaine', [Validators.required, this.asyncCustomValidator])
      ])
    });
  }

  ngOnInit() {
    this.userForm.valueChanges.subscribe(x => console.log('values change',x));
    this.userForm.statusChanges.subscribe(x => console.log('status change',x));
  }

}

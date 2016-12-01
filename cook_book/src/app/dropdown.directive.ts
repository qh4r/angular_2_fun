import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[cbDropdown]'
})
export class DropdownDirective {

  // w ten sposob mozna sterowac obecnoscia klasy
  //odniesienie do wbudowanej klasy bootstrapa
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') leave(){
    this.isOpen = false;
  }

  private isOpen = false;

  constructor() {
  }

}

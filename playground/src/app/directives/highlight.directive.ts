// ng g d highlight

import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[pgHighlight]' // wybor prze atrybut highlight jak cssie
  // [hidden] / [type=text] - przykladowo
})
export class HighlightDirective {

  // ElementRef zostaje wstrzykniete
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // slaby sposob ale tak fo' sho'
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    // lepszy sposob podobno
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

  }

}

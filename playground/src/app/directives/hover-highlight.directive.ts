import {Directive, HostListener, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[pgHoverHighlight]'
})
export class HoverHighlightDirective {
  private normalColor;

  // slucha eventow i wywllouje funkcje
  @HostListener('mouseenter', ['$event']) mouseover(e) {
    this.normalColor = this.backgroundColor;
    this.backgroundColor = 'purple';
    console.log(e); // tak przykladowo
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.normalColor;
  }

  // tworzy binding jednostrony - get
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  // tworzy binding jednostrony - set
  // @HostBinding('style.backgroundColor') set getColor(value){
  //   this.backgroundColor = value;
  // }

  private backgroundColor;

  constructor(private elementRef: ElementRef) {
    this.backgroundColor = elementRef.nativeElement.style.backgroundColor;
  }

}

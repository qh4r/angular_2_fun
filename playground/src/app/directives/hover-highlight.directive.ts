import {Directive, HostListener, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[pgHoverHighlight]'
})
export class HoverHighlightDirective implements OnInit{
  private normalColor;

  // slucha eventow i wywllouje funkcje
  @HostListener('mouseenter', ['$event']) mouseover(e) {
    this.normalColor = this.backgroundColor;
    this.backgroundColor = this.highlightColor;
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

  // jako argument nazwa przeslaniajaca
  // nazwa pokrywa sie z nazwa dyrektywy wiec dyrektywa sluzy tez do jej przypisywania
  // jesli nazwa byla by inna potrzebny byl by dodatkowy atrybut w html
  @Input('pgHoverHighlight') highlightColor = 'purple';

  private backgroundColor;


  // w konstruktorze nie mozna odnosic sie do wartoosci bindingow tylko on init
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.elementRef.nativeElement.style.backgroundColor;
  }
}

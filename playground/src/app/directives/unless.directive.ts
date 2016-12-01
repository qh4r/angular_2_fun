import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[pgUnless]'
})
export class UnlessDirective {

  // by mozna bylo bezposrednio do tej dyrektywy przypisywac
  @Input('pgUnless') set unless(val: boolean) {
    if (!val) {
      // przekazuje do utworzonego kontenera ten element na ktorym byla direktywa
      // dziala jak *if ale odwrocone
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear(); //oproznia kontener
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }
}

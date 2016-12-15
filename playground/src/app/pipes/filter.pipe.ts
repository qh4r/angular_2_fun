import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringFilter',
  // pure: false // ta opcja sprawi ze pipe bedzie odswiezal sie po zmianie zawartosci referowanego obiektu
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length == 0) {
      return value;
    }
    return value.filter(x => {
      // return x.indexOf && (x.indexOf(args[0]) > -1);
      return x.match(`^.*${args[0]}.*$`); //lepszy sosob tamten ma problem z polskimi znakami
      // tak naprawde z poslkimi znakami oba dzialaja chujowo
    })
  }

}

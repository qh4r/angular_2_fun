import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicate'
})
export class DuplicatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} ${value}`;
  }

}

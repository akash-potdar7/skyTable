import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
  }

}

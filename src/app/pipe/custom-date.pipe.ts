import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.date(value);
  }

  date(date_: string) {
    const date = new Date(date_);
    const month = () => {
      switch (date.getMonth()) {
        case 0: return 'jan'; case 1: return 'feb'; case 2: return 'mar'; case 3: return 'apr';
        case 4: return 'may'; case 5: return 'jun'; case 6: return 'jul';
        case 7: return 'aug'; case 8: return 'sep'; case 9: return 'oct';
        case 10: return 'nov'; case 11: return 'dec';
      }
    };
    return `${date.getDay()} ${month()} ${date.getFullYear()}`;
  }

}

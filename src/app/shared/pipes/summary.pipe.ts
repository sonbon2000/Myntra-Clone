import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number) {
    if (value.length > 20) {
      return value.substring(0, limit) + ' ...';
    } else {
      return value
    }
  }
}

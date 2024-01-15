import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clockIcon'
})
export class ClockIconPipe implements PipeTransform {

  transform(count: number): string {
    return '⏰ '.repeat(count);
  }

}

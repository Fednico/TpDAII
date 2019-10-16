import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeKpa'
})
export class PipeKpaPipe implements PipeTransform {

  transform(value: number): string {
    return value + ' Kpa';
  }

}

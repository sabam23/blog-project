import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: string): unknown {
    let msg = value.slice(9);
    let result = msg.split('.');
    return result[0];
  }

}

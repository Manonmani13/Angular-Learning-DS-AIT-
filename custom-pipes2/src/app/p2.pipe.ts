import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p2',
  standalone: false
})
export class P2Pipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var x=value.split(" ");
    x=x.join("@");
    return x;
  }

}

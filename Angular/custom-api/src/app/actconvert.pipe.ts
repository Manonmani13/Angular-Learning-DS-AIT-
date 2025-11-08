import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actconvert',
  standalone: false
})
export class ActconvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(args[0]=="e"){
      if(args[1]=="f")
        return " €"+value * 89.14;
      else
      return value * 89.14+" €";

    }
    else if(args[0]=='d'){
      return value * 83.56+" $";
    }
    return value;
  }

}

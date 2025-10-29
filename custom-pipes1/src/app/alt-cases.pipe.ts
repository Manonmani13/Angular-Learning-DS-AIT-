import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altCases',
  // standalone: false
})
export class AltCasesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var narr='';
    for(var i=0;i<value.length;i++){
      // alert(value[i]);
      if(i%2==0){
        narr+=value[i].toUpperCase();
      }
      else{
        narr+=value[i].toLowerCase();
      }
    }
    // alert(value);
    return narr;
  }

}

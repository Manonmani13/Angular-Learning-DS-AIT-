import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityarraypipe',
  standalone: false,
  pure:false
})
export class CityarraypipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    // value.map((dt:any)=>{
    //   return dt;
    // });
    var nstr='';
    for(var cn of value){
      nstr+=cn+"/";
    }
    return nstr;
    // return null;
  }

}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

export class httpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   req=req.clone({
    setHeaders:{
      tokens:"RTYUUIU"
    }
   })
    return next.handle(req).pipe(map((dt:any)=>{
      console.log("From intercep");
      console.log(dt);
      return dt;
    }),
    catchError((er:HttpErrorResponse)=>{
      let errMsg:any;
      if(er.status==404){
        errMsg="API not available"
      }
      else if(er.status==500){
        errMsg="Sever error"
      }
      else{
        errMsg="UnKnow error"
      }
      return throwError(errMsg);
    })
  )
  } 

  
};

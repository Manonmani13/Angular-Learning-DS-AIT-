import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route:any, state) => {
  var rt=new Router();
  var urlPath=route.url[0].path;
  localStorage.setItem("path",urlPath);
  if(localStorage.getItem("auth")){
    // console.log(route.url.urlSegment )
    // rt.navigateByUrl(urlPath); 
    return true;
  }else{
    rt.navigateByUrl("lg");
    return false;
  }
};

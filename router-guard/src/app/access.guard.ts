import { CanActivateFn,Router } from '@angular/router';

export const accessGuard: CanActivateFn = (route, state) => {
  var rt:any=new Router();
  rt.navigate(['den']);
  return false;
};

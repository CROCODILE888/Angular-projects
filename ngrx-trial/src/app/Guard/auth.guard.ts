import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../shared/master.service';

export const authGuard: CanActivateFn = (route, state) => {

  const currentMenu = route.url[0].path;

  //another way of creating an instance of a library
  //we have usually used constructor method to initiate but this is different approach
  const router = inject(Router);
  const service = inject(MasterService)

  if (service.haveAccess()) {
    return true
    // if (currentMenu == "blog") {
    //   return true;
    // } else {
    //   alert('access denied')
    //   router.navigate(['']);
    //   return false;
    // }
  } else {
    alert('access denied')
    router.navigate(['']);
    return false
  }
};

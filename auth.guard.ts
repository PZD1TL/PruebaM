import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  let rol = localStorage.getItem("rol") || null;
  if (rol === '1'){
    return true;
  } else if (rol === '2' /*&& (route.routeConfig?.path=="home" || route.routeConfig?.path=="error" || route.routeConfig?.path=="matriz-MSE-SH")*/){
    return true;
  } else if (rol === '3' /*&& (route.routeConfig?.path=="home" || route.routeConfig?.path=="error" || route.routeConfig?.path=="matriz-MSE-SH")*/){
    return true;
  } else if (rol === '4' /*&& (route.routeConfig?.path=="home" || route.routeConfig?.path=="error" )*/){
    return true;
  } else if (rol === '5' /*&& (route.routeConfig?.path=="home" || route.routeConfig?.path=="error" )*/){
    return true;
  } else {
    router.navigateByUrl('/error')
    return false;
  }
};

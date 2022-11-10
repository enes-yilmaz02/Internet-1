import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var sonuc: boolean = false;
    if (localStorage.getItem("adsoyad")) {
      sonuc = true;
    } else {
      location.href = "/login";
    }
    return sonuc;
  }

}

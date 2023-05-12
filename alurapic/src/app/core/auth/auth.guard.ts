import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!this.userService.isLogged()){
        this.router.navigate([''],
        {
          queryParams: {
            fromUrl: state.url
          }
        });
        return false;
      }
      return true;
  }

  constructor(private userService: UserService, private router: Router){}
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user : Observable<any>;
  userId : any ;
  isAdmin:boolean=false;

  constructor(private as:AuthService, private router:Router,private fauth : AngularFireAuth){
    this.user= fauth.user;
    fauth.user.subscribe(x=>{
      this.userId = x?.uid;
      if(x?.email === 'abc@test.com'){
        this.isAdmin=true;
      }
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return new Promise (resolve => {
        if(this.isAdmin){
            resolve(true);
          }
          else{
            alert('Unauthorized  Access..!');
            this.router.navigate(['/']);
           
          }
        })
  
  }
  
}

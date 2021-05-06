import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg:string='';
  constructor(private authservice : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(form:any){
    this.authservice.login(form.value.email,form.value.password)
    .then(data => {
      this.router.navigate(['/'])
      //  console.log(data.user?.email);
    }
      
    )
    .catch(err => 
      {
        console.log(err);
        alert(err);
        
      })
    
  }

}

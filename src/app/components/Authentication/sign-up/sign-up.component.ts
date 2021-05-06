import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg:string='';
  constructor(private authservice: AuthService,private userservice: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  signup(form:any){

    this.authservice.signup(form.value.email,form.value.password)
    .then(data => {
            this.userservice.addNewUser(data.user?.uid,form.value.name,form.value.address);
            this.errorMsg= '';
            this.router.navigate(['/'])
    })
    .catch(err => this.errorMsg = err);
  }
}

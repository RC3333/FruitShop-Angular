import { Component, OnInit } from '@angular/core';
import { AdminGuard } from 'src/app/services/admin.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean=false;
 
  constructor(private authservice:AuthService,private AdminGuard:AdminGuard) { }

  isOpen:boolean=false;
  isAdmin:boolean=false;
  toggleNavBar(){
    this.isOpen= !this.isOpen;
  }
  ngOnInit(): void {
  
    this.authservice.user.subscribe(user => {
      if(user){
          this.isUser=true;
          this.authservice.userId = user.uid;
          this.isAdmin=this.AdminGuard.isAdmin;
          //  console.log(this.isAdmin);
        }
      else
        {
          this.isUser = false;
          this.authservice.userId=''
        } 
          
    })

  }
  onLogout(){
    alert("User Logout");
    this.authservice.logout();
  }


}

import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  add : number= -1;

  Products !: Array<any>

  constructor(private ps: ProductsService, private cart:CartService, private as:AuthService, private route:Router) { }
  filterTerm!:string;
  ngOnInit(){
    this.ps.getAllProducts().subscribe(
       data => this.Products = data 
    );

  }

  addToCart(index:number){
    if(this.as.userId){
      this.add = +index;
    }
     
    else{
      alert('Please login first');
      this.route.navigate(['/login'])
    }
     

    // console.log("Added",this.Products[index]);
  }
  buy(amount:any){
    let selectedProducts= this.Products[this.add];
    let data = {
      name : selectedProducts.Name,
      price: selectedProducts.Price,
      amount: +amount
    }
    // console.log(data);
    this.cart.addToCart(data)
    .then( () => this.add= -1)
    .catch( err=> console.log(err))
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingcart : Array<any> = [];
  NoOfItems:number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(cs => {
      this.shoppingcart = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {} 
        }
      }) 
    });
  }

  total() {
    return this.shoppingcart.reduce((sum, prod) => sum += (prod.price*prod.amount) ,0)
  }
  calcTotal() {
    return this.shoppingcart.reduce((acc, prod) => acc+= 1 ,0)
  }
  
  deleteCart(index:any){
    this.cart.deletefromcart(this.shoppingcart[index].id)
  }
  updateCart(index:any){
      this.cart.updatefromCart(this.shoppingcart[index].id , this.shoppingcart[index].amount);
      this.total();
      
  }

}

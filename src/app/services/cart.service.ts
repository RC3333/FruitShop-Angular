import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  constructor(private fs: AngularFirestore, private as:AuthService) { }


  addToCart(Product:any){
    
     return this.fs.collection(`Users/${this.as.userId}/cart`).add(Product);
  }
  getCart(){
    
    return this.fs.collection(`Users/${this.as.userId}/cart`).snapshotChanges()  
  }
  deletefromcart(id:any){
    return this.fs.doc(`Users/${this.as.userId}/cart/${id}`).delete()
  }
  updatefromCart(id:any,amount:number){
    return this.fs.doc(`Users/${this.as.userId}/cart/${id}`).update({amount})
  }
}

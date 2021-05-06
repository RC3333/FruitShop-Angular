import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  getAllProducts(){
    return this.fs.collection('Products').valueChanges();
  }

  addProduct(Name:string,Price: Number,image:File ){
   let ref = this.storage.ref('ProductsImages/' + image.name)
   ref.put(image).then(()=> {
      ref.getDownloadURL().subscribe(ProductPath => {
        this.fs.collection('Products').add(
          {
            Name,
            Price,
            ProductPath,
          }
        );
        alert('Product Added !');
      })
   })
   }

   getProducts(){
     return this.fs.collection('Products').snapshotChanges()
   }
   updateProduct(id:any,Name: string ,Price:number){
      return this.fs.doc(`Products/${id}`).update({Name,Price})
   }
   deleteProduct(id:any){
      return this.fs.doc(`Products/${id}`).delete();
      
   }

}

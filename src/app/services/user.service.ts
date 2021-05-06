import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as: AngularFirestore) { }

  addNewUser(id:any,name:string,address:string){
    return this.as.doc('Users/' + id).set({
      name: name,
      address : address
    })
  }
}

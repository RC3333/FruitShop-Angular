import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ProductsArr !: Array<any>
 
 constructor(private products: ProductsService) { }
 filterTerm!:string;
 page = 1;
 count = 0;
 tableSize = 5;
 tableSizes = [5,6,8,10,15];
 onTableDataChange(event:any){
  this.page = event;
  this.ngOnInit();
}  

onTableSizeChange(event:any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.ngOnInit();
}  
 
   ngOnInit(): void {
      this.products.getProducts().subscribe(cs=> {
        this.ProductsArr = cs.map(x => {
          return {
            id:x.payload.doc.id,
            ...x.payload.doc.data() as {}
          }
        })
       //  console.log(this.ProductsArr)
      })
      
   }
   
 update(index:any,name:string,price:number){
   this.products.updateProduct(this.ProductsArr[index].id,name,price)
   
 }
 delete(index:any){
   this.products.deleteProduct(this.ProductsArr[index].id);
   alert('Product Deleted !');
 }
}

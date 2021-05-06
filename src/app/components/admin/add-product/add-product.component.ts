import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('image') images !: ElementRef
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
  }
  addNewProduct( f:NgForm){
    let name = f.value.name,
        price = f.value.price,
        image = (this.images.nativeElement as HTMLInputElement).files![0]

       this.products.addProduct(name,price,image);
       f.reset();

  }
}

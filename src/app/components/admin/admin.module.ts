import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrdersComponent,
    AddProductComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule {
 
  
 }

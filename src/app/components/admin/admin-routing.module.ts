import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminGuard } from 'src/app/services/admin.guard';
// import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';

const adminRoutes: Routes = [
  {
    path:'', 
    component:AdminComponent, 
    children:[
      {path:'orders', component:OrdersComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

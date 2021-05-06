import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/Layout/home/home.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { NotFoundComponent } from './components/Layout/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/Authentication/sign-up/sign-up.component';
import { AuthguardGuard } from './services/authguard.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path:'admin', loadChildren:()=> import('./components/admin/admin.module')
.then(mod => mod.AdminModule), canActivate:[AdminGuard]},
  {path:'',            component:HomeComponent},
  {path:'cart',         component:CartComponent, canActivate:[AuthguardGuard]},
  {path:'sign-up',      component:SignUpComponent},
  {path:'login',        component:LoginComponent},
  {path:'orders',       component:OrdersComponent},
  {path:'products',     component:ProductsComponent},
  {path:'**',           component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

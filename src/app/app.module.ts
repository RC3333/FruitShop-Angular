import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Layout/home/home.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { SignUpComponent } from './components/Authentication/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { NotFoundComponent } from './components/Layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from  '@angular/fire/storage';
import { FooterComponent } from './components/Layout/footer/footer.component';
// import { NgxPaginationModule } from 'ngx-pagination';
 import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgBootstrapDarkmodeModule } from 'ng-bootstrap-darkmode';

const config ={
      apiKey: "AIzaSyAw446HvS1LCccyHNZ6CZ4wO85iUfKo6ns",
      authDomain: "firestore-7a106.firebaseapp.com",
      projectId: "firestore-7a106",
      storageBucket: "firestore-7a106.appspot.com",
      messagingSenderId: "510438705135",
      appId: "1:510438705135:web:26c36bb74acfc521ae981a",
      measurementId: "G-KXJEJ3HSDZ"

}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
   AngularFireModule.initializeApp(config),
   AngularFirestoreModule,
   AngularFireStorageModule,
  //  NgxPaginationModule,
   NgBootstrapDarkmodeModule
   
  

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

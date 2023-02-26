import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { AboutComponent } from './about/about.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OffersComponent } from './offers/offers.component';
import { LoginService } from './login.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { MaxComponent } from './max/max.component';
import { PizzaPanComponent } from './pizza-pan/pizza-pan.component';
import { ChickersComponent } from './chickers/chickers.component';
import { ResturantFormComponent } from './resturant-form/resturant-form.component';
import { CLaVeComponent } from './c-la-ve/c-la-ve.component';
import { PizzaExpressComponent } from './pizza-express/pizza-express.component';
import { RoveComponent } from './rove/rove.component';
import { KfcComponent } from './kfc/kfc.component';
import { LogoutService } from './logout.service';
import { ResturantsService } from './resturants.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ShopingCartComponent,
    AboutComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    OffersComponent,
    ProductFormComponent,
    MaxComponent,
    PizzaPanComponent,
    ChickersComponent,
    ResturantFormComponent,
    CLaVeComponent,
    PizzaExpressComponent,
    KfcComponent,
    RoveComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'' ,  component: HomeComponent},
      {path:'login' ,  component:LoginComponent},
      {path:'shopping-cart' ,  component:ShopingCartComponent},
      {path:'About Service' ,  component:AboutComponent},
      {path:'Pizza-Pan' ,  component:PizzaPanComponent},
      {path:'Maxs' ,  component:MaxComponent},
      {path:'Chickers' ,  component:ChickersComponent},
      {path:'offers' ,  component:OffersComponent},
      {path:'C-la ve' , component:CLaVeComponent},
      {path:'pizza-express' , component:PizzaExpressComponent},
      {path:'Rove' , component:RoveComponent},
      {path:'KFC' , component:KfcComponent},
      {path:'my-orders' ,  component:MyOrdersComponent},
      {path:'Add-New-Resturant' ,  component:ResturantFormComponent},
      {path:'admin/admin-orders' ,  component:AdminOrdersComponent},
      {path:'admin/admin-products' , component:AdminProductsComponent},
      {path:'admin/admin-products/New' , component:ProductFormComponent},
      {path:'admin/admin-products/:id' , component:ProductFormComponent},

      
    ])
  ],
  providers: [
    LoginService,
    LogoutService,
    ResturantsService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

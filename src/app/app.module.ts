
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { SignupSellerComponent } from './seller-auth/signup-seller/signup-seller.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { ProductFiltersComponent } from './product/product-filters/product-filters.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    ProductComponent,
    BannerComponent,
    SignupSellerComponent,
    LoginComponent,

    RegisterComponent,

    ProductFiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

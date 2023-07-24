import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SellerAuthComponent } from "./seller-auth/seller-auth.component";
import { SellerHomeComponent } from "./seller-home/seller-home.component";
import { AuthGuard } from "./auth.guard";
import { SignupSellerComponent } from "./seller-auth/signup-seller/signup-seller.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { SellerAddProductComponent } from "./seller-add-product/seller-add-product.component";
import { SellerUpdateProductComponent } from "./seller-update-product/seller-update-product.component";
import { SearchComponent } from "./search/search.component";



const appRoutes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    },
    {
        path: 'seller-home',
        component: SellerHomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signup-seller',
        component: SignupSellerComponent
    },


    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component : RegisterComponent},

    {
        path: 'product',
        component: ProductComponent

    },

    {
        path: 'cart',
        component: CartComponent
    },
    {
        component:SellerAddProductComponent,
        path:'seller-add-product',
        canActivate:[AuthGuard]
      },{
        component:SellerUpdateProductComponent,
        path:'seller-update-product/:id',
        canActivate:[AuthGuard]
      },
      {
        component: SearchComponent,
        path:'search/:query'
      }
]
   
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {
}

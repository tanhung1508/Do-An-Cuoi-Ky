import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SellerAuthComponent } from "./seller-auth/seller-auth.component";
import { SellerHomeComponent } from "./seller-home/seller-home.component";
import { AuthGuard } from "./auth.guard";
import { SignupSellerComponent } from "./seller-auth/signup-seller/signup-seller.component";


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
    }
]
   
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {
}

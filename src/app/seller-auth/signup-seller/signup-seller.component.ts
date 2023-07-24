import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/app/data-type';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-signup-seller',
  templateUrl: './signup-seller.component.html',
  styleUrls: ['./signup-seller.component.css']
})
export class SignupSellerComponent {

  
  constructor(private seller : SellerService, private router: Router) {}

  ngOnInit(): void{
    
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
}

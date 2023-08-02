import { Component, OnInit } from '@angular/core';
import { cart, price } from '../data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartData: cart[] | undefined;
  priceSummary: price = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadDetails()

  }

  removeToCart(cartId: number | undefined) {
    cartId && this.cartData && this.product.removeToCart(cartId)
      .subscribe((result) => {
        this.loadDetails();
      })
  }

  loadDetails() {
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      console.warn(this.cartData);
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity);
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 8;
      this.priceSummary.delivery = 30000;
      // this.priceSummary.total = price +  (price / 8000) + 30000 -(price / 10000);
      this.priceSummary.total = price + this.priceSummary.tax + this.priceSummary.delivery - this.priceSummary.discount;

      if (!this.cartData.length) {
        this.router.navigate(['/']);
      }

    })
  }


  checkout() {
    this.router.navigate(['/checkout'])
  }

}

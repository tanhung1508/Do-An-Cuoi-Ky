import { Component, Input } from '@angular/core';
import { product } from 'src/app/data-type';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product!: product;
}

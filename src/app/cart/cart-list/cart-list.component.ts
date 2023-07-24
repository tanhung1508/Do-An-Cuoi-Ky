import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  productList!: product[];
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }
}

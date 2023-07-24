import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: product[] = [
    {
      name: "Martin",
      price: 1000000,
      category: "xe the thao",
      color: "den trang",
      image: "./../assets/images/img-1.png",
      description: "anced",
      id: 1,
      quantity: 10,
      productId: 1
    },
    {
      name: "Merida",
      price: 2000000,
      category: "xe dia hinh",
      color: "den",
      image: "./../assets/images/img-2.png",
      description: "anced",
      id: 2,
      quantity: 10,
      productId: 2
    },
    {
      name: "Santa Cruz",
      price: 1500000,
      category: "xe the thao",
      color: "xanh den",
      image: "./../assets/images/img-5.png",
      description: "anced",
      id: 3,
      quantity: 10,
      productId: 3
    }
  ];
  constructor() { }

  getProductList(){
    return this.productList;
  }
}

import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product: ProductService, private router:Router) {}

  ngOnInit(): void {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Thêm thành công';
        this.router.navigate(['seller-home'])
      }
    });
    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
  updateDropdownName(selectElement: HTMLSelectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    selectElement.setAttribute("name", selectedOption);
  }
}

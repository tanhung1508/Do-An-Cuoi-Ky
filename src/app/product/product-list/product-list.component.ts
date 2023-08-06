import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  searchKey:string="";
  filterCategory:any;
  popularProducts:undefined|product[];
  trendyProducts:any | product[];
  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  totalRecords:any|String;
  page:any|Number=1;
  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
      this.filterCategory=data;
    })


  }
// filter(category:string){
//   this.filterCategory=this.trendyProducts.filter((a:any)=>{
//     if(a.category==category||category==''){
//       return a;
//     }
//   })
// }
filter(category: string) {
  if (category === '') {
    this.filterCategory = this.trendyProducts;
  } else {
    this.filterCategory = this.trendyProducts.filter((a: any) => {
      return a.category === category;
    });
  }
}
}

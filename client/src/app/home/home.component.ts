import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // products: JSON[]

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    // this.getProducts();
  }

  // getProducts(): void {
  //   this.productService.getProducts().then(function(result){
  //     console.log(result);
  //   });
  // }

}

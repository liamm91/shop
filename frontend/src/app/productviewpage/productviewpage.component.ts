import { Component, OnInit } from '@angular/core';
import { productItem } from '../productbox/productbox.interface';
import { ProductboxService } from '../productbox/productbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productviewpage',
  templateUrl: './productviewpage.component.html',
  styleUrls: ['./productviewpage.component.css']
})
export class ProductviewpageComponent implements OnInit {
  // added variables to hold stuff
  error: any;
  dbProduct: productItem[];

  constructor(private productService: ProductboxService, private router: Router) { }

  // copied from stack overflow, used to convert an arraybuffer into a b64 string
  private toBase64(arr: ArrayBuffer) {
    let t = new Uint8Array(arr) // if it's an ArrayBuffer
    return btoa(
       t.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

  ngOnInit(): void {
    // get the _id from the url
    // using router to grab the current url and formatting it in one line
    let href = this.router.url.split('/')[2];

    // gets json from our express website through productbox.service
    // this.productService.getProduct(this.catagory)
    // .subscribe(
    //   (data: productItem[]) => {
    //     data.map(item => item.sys.img.url = 'data:image/png;base64,' + this.toBase64(item.sys.img.data.data)); // converting the buffer array to a b64 string which can be made into a URL
    //     this.dbProduct = data; // assigning processed data into dbProduct
    //     console.log(data);
    //   }, // success path
    //   error => this.error = error // error path
    // );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { productItem } from './productbox.interface';
import { ProductboxService } from './productbox.service';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css']
})
export class ProductboxComponent implements OnInit {
  // added variables to hold stuff
  error: any;
  dbProduct: productItem[];
  @Input('catagory') catagory: string; // scanning for 'catagory' property binding when initialized by parent component

  constructor(private productService: ProductboxService) { }

  // copied from stack overflow, used to convert an arraybuffer into a b64 string
  private toBase64(arr: ArrayBuffer) {
    let t = new Uint8Array(arr) // if it's an ArrayBuffer
    return btoa(
       t.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

  ngOnInit(): void {
    // scrubbing catagory
    this.catagory ? {} : (this.catagory = "all");
    this.catagory === "all" ? {} : (this.catagory = "query/" + this.catagory);

    // gets json from our express website through productbox.service
    this.productService.getProduct(this.catagory)
    .subscribe(
      (data: productItem[]) => {
        data.map(item => item.sys.img.url = 'data:image/png;base64,' + this.toBase64(item.sys.img.data.data)); // converting the buffer array to a b64 string which can be made into a URL
        this.dbProduct = data; // assigning processed data into dbProduct
        console.log(this.dbProduct);
      }, // success path
      error => this.error = error // error path
    );
  }
}

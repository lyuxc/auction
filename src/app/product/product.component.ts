import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // dataSource: Observable<any>;

  products: Observable<any>;

  // private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  private imgUrl = 'http://placehold.it/320x150';

  constructor(
    private http: Http,
    private productService: ProductService
  ) {
    let myHeaders:Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");

    this.products = this.http.get('/api/products', {headers: myHeaders})
      .map((res) => res.json());
 
    // this.titleFilter.valueChanges
    //   .debounceTime(500)
    //   .subscribe(
    //     value => this.keyword = value
    //   );
  }

  ngOnInit() {
    // this.products = this.productService.getProducts();

    // this.dataSource.subscribe(
    //   (data) => {
    //     console.log('dataSource', data)
    //     this.products = data
    //   }
    // );
  }

}


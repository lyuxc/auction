import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;


  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }
  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.91, 3.1, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["电子产品","硬件设备"]),
      new Product(2, "第二个商品", 1.92, 2.2, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["图书","硬件设备"]),
      new Product(3, "第三个商品", 1.93, 4.3, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["硬件设备"]),
      new Product(4, "第四个商品", 1.94, 1.4, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["电子产品","硬件设备"]),
      new Product(5, "第五个商品", 1.95, 3.5, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["电子产品"]),
      new Product(6, "第六个商品", 1.96, 4.6, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["图书"])
    ]
    this.products.push(new Product(7, "第七个商品", 1.96, 4.6, "这是一个商品，是我在学习慕课网Angular入门实战时创建的。", ["图书"]))
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}
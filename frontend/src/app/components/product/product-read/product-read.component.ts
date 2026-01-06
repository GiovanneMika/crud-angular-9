import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  ngAfterViewInit(): void {
  }

  readProducts() {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });

  }

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  product: Product;
  displayedColumns = ['id', 'name', 'price', 'action'];

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

  deleteProduct(id: string): void {
    this.productService.readById(id).subscribe(product => {
      if (window.confirm(`Tem certeza que deseja excluir ${product.name}?`)) {
        this.productService.delete(id).subscribe(() => {
          this.productService.showMessage(`${product.name} excluído com sucesso!`);
          this.readProducts();
        });
      }
    });
  }
}

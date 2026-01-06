import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id: string): void {
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    if (window.confirm(`Tem certeza que deseja excluir ${this.product.name}?`)) {
      this.productService.delete(this.id).subscribe(() => {
        this.productService.showMessage(`Product deleted with success!`);
        this.router.navigate(['/products']);
      })
    }
  }


  cancel(): void {
    this.router.navigate(['/products']);
  }
}

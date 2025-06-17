import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  editingIndex: number | null = null;
  editedProduct: Product = { id: 0, name: '', price: 0, stock: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  editProduct(index: number): void {
    this.editingIndex = index;
    this.editedProduct = { ...this.products[index] };
  }

  saveProduct(): void {
    if (this.editingIndex !== null) {
      this.products[this.editingIndex] = { ...this.editedProduct };
      this.editingIndex = null;
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }

  deleteProduct(index: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.products.splice(index, 1);
    }
  }
}

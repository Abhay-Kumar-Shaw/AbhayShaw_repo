import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  editingIndex: number | null = null;
  editedCustomer: Customer = { id: 0, name: '', mobile: '', address: '' };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  editCustomer(index: number): void {
    this.editingIndex = index;
    this.editedCustomer = { ...this.customers[index] }; // clone the selected customer
  }

  saveCustomer(): void {
    if (this.editingIndex !== null) {
      this.customers[this.editingIndex] = { ...this.editedCustomer };
      this.editingIndex = null;
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }

  deleteCustomer(index: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this customer?');
    if (confirmDelete) {
      this.customers.splice(index, 1);
    }
  }
}

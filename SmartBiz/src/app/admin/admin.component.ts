import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  customersCount = 120;
  productsCount = 45;
  totalSales = 75000;
  pendingPayments = 12000;

  activeSection: string = '';
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  showSection(section: string): void {
    this.activeSection = section;

    if (section === 'transactions') {
      this.transactions = this.transactionService.getTransactions();
    }
  }
}

import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    { id: 1, customerName: 'Rajesh Kumar', productName: 'Mobile', amount: 15000, date: '2025-06-14' },
    { id: 2, customerName: 'Neha Mishra', productName: 'TV', amount: 25000, date: '2025-06-15' },
    { id: 3, customerName: 'Manas Ranjan', productName: 'Fridge', amount: 30000, date: '2025-06-15' },
  ];

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}

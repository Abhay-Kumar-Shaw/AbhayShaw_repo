import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions = [
    { id: 1, customerName: 'Rajesh Kumar', productName: 'AC Unit', amount: 15000, date: '2024-05-01' },
    { id: 2, customerName: 'Sunita Sahu', productName: 'Fridge', amount: 20000, date: '2024-05-03' },
    { id: 3, customerName: 'Neha Mishra', productName: 'Washing Machine', amount: 18000, date: '2024-05-05' },
    { id: 4, customerName: 'Manas Ranjan', productName: 'Cooler', amount: 8000, date: '2024-05-08' }
  ];
}

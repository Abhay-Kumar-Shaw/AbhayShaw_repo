import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reports = [
    { title: 'Monthly Sales', value: '₹75,000', description: 'Total sales recorded in the current month.' },
    { title: 'Pending Payments', value: '₹12,000', description: 'Amount yet to be received from customers.' },
    { title: 'Top Product', value: 'Mobile Charger', description: 'Most sold product in this period.' },
    { title: 'New Customers', value: '25', description: 'Customers added this month.' }
  ];
}

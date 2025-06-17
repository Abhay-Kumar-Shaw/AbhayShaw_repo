import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './auth.guard'; // ✅ Make sure this guard exists
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'make-sale', component: SaleComponent, canActivate: [AuthGuard] },
  // { path: 'add-customer', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } // ✅ Wildcard to catch unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-inventory', component: AddInventoryComponent },
  { path: 'help', component: HelpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'update-inventory/:id', component: UpdateInventoryComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

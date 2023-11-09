import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [

    {path: '', component: DashboardComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'task', component: TaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ParentCategoryComponent } from './pages/parent-category/parent-category.component';
import { ChildCategoryComponent } from './pages/child-category/child-category.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'', component:LayoutComponent, children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'employee', component: EmployeeComponent},
    {path:'department', component: DepartmentComponent},
    {path:'parent-category', component: ParentCategoryComponent},
    {path:'child-category', component: ChildCategoryComponent},
    {path:'employee', component: EmployeeComponent},
    {path:'new-ticket', component: NewTicketComponent},
    {path:'ticket-list', component: TicketListComponent}
  ]},
  {path:'**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

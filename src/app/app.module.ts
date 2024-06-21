import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParentCategoryComponent } from './pages/parent-category/parent-category.component';
import { ChildCategoryComponent } from './pages/child-category/child-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DepartmentComponent,
    EmployeeComponent,
    NewTicketComponent,
    TicketListComponent,
    DashboardComponent,
    ParentCategoryComponent,
    ChildCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

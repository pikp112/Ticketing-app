import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private http = inject(HttpClient);
  private apiUrl = 'localhost:3000/';

  login(obj: any) {
    return this.http.post(`${this.apiUrl}login`, obj);
  }

  getAllDepartments() {
    return this.http.get(`${this.apiUrl}departments`);
  }

  createNewDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}departments`, obj);
  }

  updateDepartment(obj: any) {
    return this.http.put(`${this.apiUrl}departments`, obj);
  }

  deleteDepartment(id: number) {
    return this.http.delete(`${this.apiUrl}departments?id=${id}`);
  }

  getAllpCategory() {
    return this.http.get(`${this.apiUrl}parent-category`);
  }

  createPCategory(obj: any) {
    return this.http.post(`${this.apiUrl}parent-category`, obj);
  }

  updatePCategory(obj: any) {
    return this.http.put(`${this.apiUrl}parent-category`, obj);
  }

  deletePCategory(id: number) {
    return this.http.delete(`${this.apiUrl}parent-category?id=${id}`);
  }

  getAllcCategory() {
    return this.http.get(`${this.apiUrl}child-category`);
  }
  createcCategory(obj: any) {
    return this.http.post(`${this.apiUrl}child-category`, obj);
  }
  updatecCategory(obj: any) {
    return this.http.put(`${this.apiUrl}child-category`, obj);
  }
  deletecCategory(id: number) {
    return this.http.delete(`${this.apiUrl}child-category?id=${id}`);
  }

  getAllRoles() {
    return this.http.get(`${this.apiUrl}roles`);
  }
  getAllEmployees() {
    return this.http.get(`${this.apiUrl}employees`);
  }
  createEmployee(obj: any) {
    return this.http.post(`${this.apiUrl}employees`, obj);
  }
  updateEmployee(obj: any) {
    return this.http.put(`${this.apiUrl}employees`, obj);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}employees?id=${id}`);
  }
  addNewTicket(obj: any) {
    return this.http.post(`${this.apiUrl}new-ticket`,obj);
  }
}

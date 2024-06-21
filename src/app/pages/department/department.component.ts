import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  private masterService = inject(MasterService);
  private router = inject(Router);
  public departments: any = [];
  newDeptObj: any = {
    "deptId": 0,
    "deptName": "",
    "createdDate": ""
  }

  ngOnInit(){
    this.getDept();
  }

  getDept(){
    this.masterService.getAllDepartments().subscribe((res: any) => {
      this.departments = res.data;
    });
  }

  saveDept(){
    this.masterService.createNewDepartment(this.newDeptObj).subscribe((res: any) => {
      if(res.result){
        alert("Department created successfully");
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  updateDept(){
    this.masterService.updateDepartment(this.newDeptObj).subscribe((res: any) => {
      if(res.result){
        alert("Department updated successfully");
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any){
    this.newDeptObj = data;
  }
  onDelete(id: number){
    const isDelete = confirm("Are you sure you want to delete this department?");
    if(!isDelete){
      return;
    }
    this.masterService.deleteDepartment(id).subscribe((res: any) => {
      if(res.result){
        alert("Department deleted successfully");
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
}
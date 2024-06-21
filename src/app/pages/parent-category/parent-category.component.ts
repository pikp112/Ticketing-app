import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-parent-category',
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css'
})
export class ParentCategoryComponent {
  masterSrc= inject(MasterService);

  gridList: any[]=[];
  deptList: any[]=[];

  newObj: any = {
    "categoryId": 0,
    "categoryName": "",
    "deptId": 0
  }

  ngOnInit(): void {
    this.getGridData();
    this.getAllDept();
  }

  getAllDept() {
    this.masterSrc.getAllDepartments().subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllpCategory().subscribe((res:any)=>{
      debugger;
      this.gridList = res.data;
    })
  }

  save() {
    debugger;
    this.masterSrc.createPCategory(this.newObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Parent Category Created Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    }) 
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    debugger;
    this.masterSrc.updatePCategory(this.newObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Parent Category Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    }) 
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if(isDelete) {
      this.masterSrc.deletePCategory(id).subscribe((res:any)=>{
        debugger;
        if(res.result) {
          alert("Parent Category Deleted Success");
          this.getGridData();
        } else {
          alert(res.message)
        }
      }) 
    }
  }
}

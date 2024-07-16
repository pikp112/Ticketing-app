import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit{
  masterService = inject(MasterService);
  deptList: any = [];
  pCategoryList: any = [];
  cCategoryList: any = [];
  filterCategory: any = [];
  selectedPCategory: string = '';
  newTicketObj: any = {
    "employeeId": 0,
    "severity": "",
    "childCategoryId": 0,
    "deptId": "",
    "requestDetails": ""
  };


  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser');
    if(loggedUserData != null){
      const userData = JSON.parse(loggedUserData);
      this.newTicketObj.employeeId = userData.employeeId;
    }
    this.getDept();
    this.getpCategory();
    this.getcCategory();
  }

  getDept(){
    this.masterService.getAllDepartments().subscribe((res: any) => {
      this.deptList = res.data;
    });
  }
  getpCategory(){
    this.masterService.getAllpCategory().subscribe((res: any) => {
      this.pCategoryList = res.data;
    });
  }
  getcCategory(){
    this.masterService.getAllcCategory().subscribe((res: any) => {
      this.cCategoryList = res.data;
    });
  }
  onCategoryChange(){
    this.filterCategory = this.cCategoryList.filter(x => x.parentCategoryName = this.selectedPCategory);
  }
  onCreateTicket(){
    this.masterService.addNewTicket(this.newTicketObj).subscribe((res: any) => {
      if(res.success){
        alert("Ticket created successfully");
      } else {
        alert(res.message);
      }
    });
  }
}

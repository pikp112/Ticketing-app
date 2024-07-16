import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{
  mode: string = 'My tickets';
  tickets: any[] = [];
  masterService = inject(MasterService);
  loggeUserEmployeeId: any;

  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser');
    if(loggedUserData != null){
      const userData = JSON.parse(loggedUserData);
      this.loggeUserEmployeeId = userData.employeeId;
    }
    this.changeMode(this.mode);
  }

  changeMode(tab: string){
    this.mode = tab;
    if(this.mode === 'My tickets'){
      this.masterService.getTiketsCreatedByLoggedEmpty(this.loggeUserEmployeeId).subscribe((res: any) => {
        this.tickets = res.data;
      });
    } else {
      this.masterService.getTicketsAssignedToEmp(this.loggeUserEmployeeId).subscribe((res: any) => {
        this.tickets = res.data;
    });
  }
  }

  changeStatus(state: string, ticketId: number){
    if (state == 'Start'){
      this.masterService.startTicket(ticketId).subscribe((res: any) => {
        if(res.result){
          alert('Ticket status changed!');
          this.changeMode(this.mode);
        } else {
          alert(res.message);
        }
      });
    } else {
      this.masterService.closeTicket(ticketId).subscribe((res: any) => {
        if(res.result){
          alert('Ticket status changed!');
          this.changeMode(this.mode);
        } else {
          alert(res.message);
        }
      });
    }
  }
}

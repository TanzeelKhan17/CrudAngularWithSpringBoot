import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empl: Employee= new Employee();

  constructor ( private addservice: EmployeeServiceService,
     private router:Router){}
   addEmployee(){
    this.addservice.addEmployee({ employee: this.empl }).subscribe();
    this.router.navigate(['allemp']);
   }
}

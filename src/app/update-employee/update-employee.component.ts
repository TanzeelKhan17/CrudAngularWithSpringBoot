import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empl:Employee= new Employee();
  // empArr:Employee[]=[];

  constructor(private router:Router,private empservice:EmployeeServiceService){}

  ngOnInit(): void {
    this.getEmployeeById();
  }

getEmployeeById(){
  this.empservice.getEmployeeById().subscribe(data=>{
    this.empl=data})
}

}

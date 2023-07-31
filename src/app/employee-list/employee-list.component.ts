import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice:EmployeeServiceService,
    private route:Router){}

  employee ?: Employee[];


  updateEmployee(id?: number){
    this.employeeservice.get(id);
    this.route.navigate(['update']);
    
  }



ngOnInit(): void {
  // this.employee=[
  //   {
  //   id:1,
  //   firstName:"Tanzeel",
  //   lastName:"Khan",
  //   email:"khan12@gmail.com"

  // },
  // {
  //   id:2,
  //   firstName:"Saffan",
  //   lastName:"Mirza",
  //   email:"saffan20@gmail.com"

  // },
  // {
  //   id:3,
  //   firstName:"Zaid",
  //   lastName:"Khan",
  //   email:"zaid07@gmail.com"

  // }];
  this.employeeservice.getAllEmployee().subscribe((data:Employee[])=>{
    this.employee=data;
  })
}







}

// getAllEmp(){
  

// }

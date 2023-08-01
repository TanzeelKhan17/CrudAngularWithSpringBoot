import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl="http://localhost:8080/api/v1/getall";

  addUrl="http://localhost:8080/api/v1/add";

  getId="http://localhost:8080/api/v1";

  id?:number;


  constructor(private httpclient: HttpClient) { }


  getAllEmployee():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);

  }

  addEmployee({ employee }: { employee?: Employee; } = {}):Observable<object>{
    return this.httpclient.post<object>(`${this.addUrl}`,employee)
  }
  // get Id

  get(getd?:number){
    console.log("hello in service")
    this.id=getd;
    console.log(this.id);
  }



  // get by ID

  getEmployeeById():Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.getId}/get/${this.id}`)
  }

  updateEmployeById(employee?:Employee):Observable<Employee>{
     return this.httpclient.put<Employee>(`${this.getId}/upd/${this.id}`,employee)
  }

  // Delete

  // DeleteEmployee({ id }: { id?: number; } = {}):Observable(Employee){
  //   return this.httpclient.delete<Employee>(`${this.getId}/del/${id}`)
  // }

  
  deleteEmployee(id?:number):Observable<Employee>{
    return this.httpclient.delete<Employee>(`${this.getId}/del/${id}`)
 }




}

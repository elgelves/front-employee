import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  EmployeeArray: any[] = [];


  employeeName: string = "";
  employeeEmail: string = "";
  employeeMobile: Number = 0;

  currentEmployeeID = "";

  constructor(private http: HttpClient){
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.http.get("http://localhost:8080/api/employee/getAllEmployees")
    .subscribe((resultData: any)=>{
  
      console.log(resultData);
      this.EmployeeArray = resultData;
  });
}

register(){
  let bodyData ={
    "employeeName" : this.employeeName,
    "employeeEmail" : this.employeeEmail,
    "employeeMobile" : this.employeeMobile
  }

  this.http.post("http://localhost:8080/api/employee/save",bodyData,{responseType: "text"}).subscribe((resultData: any) =>{
    console.log(resultData);
    alert("Employee Registered SuccessFully");
    this.getAllEmployees();

    this.employeeName = '';
    this.employeeEmail = '';
    this.employeeMobile =0;
  });
}

clear(){
    this.employeeName = '';
    this.employeeEmail = '';
    this.employeeMobile =0;
}


setUpdate(data: any){
  this.employeeName = data.employeeName;
  this.employeeEmail = data.employeeEmail;
  this.employeeMobile = data.employeeMobile;
  this.currentEmployeeID = data.employeeId;
}

updateRecords(){
let bodyData ={
  "employeeId" : this.currentEmployeeID,
  "employeeName" : this.employeeName,
  "employeeEmail" : this.employeeEmail,
  "employeeMobile" : this.employeeMobile
};


this.http.put("http://localhost:8080/api/employee/update", bodyData,{responseType: 'text'}).subscribe((resultData:any) =>{
  console.log(resultData);
  alert('Employee Resgistred Updated')
  this.getAllEmployees();
  this.employeeName = '';
  this.employeeEmail = '';
  this.employeeMobile = 0;
});
}

save(){
  if(this.currentEmployeeID ==''){
    this.register();
  }else{
    this.updateRecords();
  }
}

setDelete(data : any){

  this.http.delete("http://localhost:8080/api/employee/delete"+"/"+data.employeeId,{responseType: 'text'}).subscribe((resultData:any) =>{

  console.log(resultData);
    alert('Employee Deleted')
    this.getAllEmployees();
    this.employeeName = '';
    this.employeeEmail = '';
    this.employeeMobile = 0;
});

}
}
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeesvcService } from '../employeesvc.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Array<{}> = new Array<{}>();
  DeptId;

  constructor(private employeesvcService: EmployeesvcService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employees = this.employeesvcService.getEmployee();
  }

  getDeptId(deptId) {
    console.log(deptId);
    this.DeptId = deptId;
  }


}

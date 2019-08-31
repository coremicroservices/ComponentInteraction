import { Injectable } from '@angular/core';
import { DeprecatedI18NPipesModule } from '@angular/common';

const EMPLOYEE = [
  {
    id: 1,
    DeptId: 100,
    EmpName: 'Sharad'
  },
  {
    id: 2,
    DeptId: 102,
    EmpName: 'Raisel',
    EmpDesignation: 'Technical Architect'
  },
  {
    id: 3,
    DeptId: 103,
    EmpName: 'Arif Khan'
  },
  {
    id: 4,
    DeptId: 104,
    EmpName: 'Raj '
  },
  {
    id: 5,
    DeptId: 105,
    EmpName: 'Anupama'
  }
];

const DEPARTMENT = [
  {
    DeptId: 100,
    departmentName: 'Projet Lead'
  },
  {
    DeptId: 102,
    departmentName: 'Technical Architect'
  },
  {
    DeptId: 103,
    departmentName: 'Sr Recruiter'
  },
  {
    DeptId: 104,
    departmentName: 'Connsultant Doctor'
  },
  {
    DeptId: 105,
    departmentName: 'Sr. Director'
  }
];


@Injectable({
  providedIn: 'root'
})
export class EmployeesvcService {

  constructor() {
  }


  getEmployee(): Array<{}> {
    return EMPLOYEE;
  }

  getDepartment(deptId) {
    return DEPARTMENT.filter((dept) => dept.DeptId === deptId)[0]['departmentName']
  }

}

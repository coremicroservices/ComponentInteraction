import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { EmployeesvcService } from '../employeesvc.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit, OnChanges {
  

  @Input() deptId;
  deptName: string = '';

  constructor(private employeesvcService: EmployeesvcService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng onchenage ,', this.deptId);
    this.getDeptName();
  }
 

  ngOnInit(): void {
    console.log('ng ngOnInit ,', this.deptId);
  }

  getDeptName() {
    console.log('this deptId :', this.deptId);
    if (this.deptId) {
      this.deptName = this.employeesvcService.getDepartment(this.deptId);
    }
  }
}

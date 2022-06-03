import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department [] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'}
  ];
  fullName:string;
  email:string;
  phoneNumber:string;
  contactPreference: boolean;
  gender: boolean;
  isActive: boolean;
  department: number;
  dateOfBirth:Date;


  constructor() {}

  ngOnInit(): void {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
    
  }

}

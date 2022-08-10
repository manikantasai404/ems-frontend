import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticserviceService {


  menus = [
    { id: 'users', icon: 'home', desc: 'Users', route: '/ems-tool/user', active: false },
    {
        id: 'employee', icon: 'people', desc: 'Employees', route: '/ems-tool/employee', active: false,
        submenus: [
            { id: 'allemployees', desc: 'All Employees', route: '/ems-tool/employee/list', disable: false },
            { id: 'departments', desc: 'Departments', route: '/ems-tool/departments/list', disable: false },
        ]
    },
    {id: 'projects', icon: 'assignment_ind', desc: 'Projects', route: '/ems-tool/projects/list', active: false},
    {id: 'onbench', icon: 'assignment_ind', desc: 'On Bench', route: '/ems-tool/on-bench-employee/list', active: false},
];

  constructor() { }
}

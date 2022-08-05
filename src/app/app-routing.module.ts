import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonComponent } from './services/common/common.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'ems-tool',
    component: HomeComponent,
    children: [
      //Admin components
      // { path: 'admindashboard', component: AdmindashboardComponent },
      { path: 'employee/list', component: EmployeeComponent },
      // { path: 'employee/list/:id', component: EmployComponent },
      // { path: 'departments/list', component: DepartmentsComponent },
      // { path: 'departments/list/:id', component: DepartmentComponent },
      // { path: 'projects/list', component: ProjectsComponent },
      // { path: 'projects/list/:id', component: ProjectComponent },
      // { path: 'on-bench-employee/list', component: OnbenchComponent },

      // { path: 'attendance', component: AttendanceComponent },
      // { path: 'hrdashboard', component: HrdashboardComponent },
      // { path: 'employeedashboard', component: EmployeedashboardComponent },
      // { path: 'managerdashboard', component: ManagerdashboardComponent },
      // { path: 'holidays', component: HolidaysComponent },
      // { path: 'rating', component: RatingComponent },
      // { path: 'leaves', component: LeavesComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const myRoutes = [
  LoginComponent,
  EmployeeComponent,
  HomeComponent,
  PageNotFoundComponent

]

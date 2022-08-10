import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'ems-tool', component: HomeComponent,
    children: [
      { path: 'employee/list', component: EmployeeComponent },
      // { path: 'employee/list/:id', component: EmployComponent },
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

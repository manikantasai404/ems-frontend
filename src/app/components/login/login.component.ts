import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginModel } from 'src/app/models/login.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employeeLoginForm!: FormGroup;
  showPassword = false;
  public loginObj = new LoginModel();

  constructor(private form: FormBuilder,
    public common_service: CommonService,
    public _snackBar: MatSnackBar,
    public router: Router,
    private api_service: ApiService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.employeeLoginForm = this.form.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', Validators.required)

    });
  }

  passwordToggle() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
  }

  signIn() {
    let page_validity = true, diaplay_message = '';
    page_validity = page_validity && this.employeeLoginForm.valid;

    if (!page_validity) {
      diaplay_message = this.common_service.getValidationMessage(this.employeeLoginForm.controls);
      this._snackBar.open(diaplay_message, 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['errorSnackbar']
      });
      console.log(diaplay_message);
    }

    if (page_validity) {
      this.signApi();
    }
  }

  cancel() {
    this.employeeLoginForm.reset();
  }

  signApi() {
    this.mapObj();
    this.api_service.loginEmployee(this.loginObj)
    .subscribe(res=> {
      if(res?.Success) {
        this.router.navigateByUrl(`/ems-tool`)
      }
    })
  }

  mapObj() {
    this.loginObj.email = this.employeeLoginForm.value.email;
    this.loginObj.password = this.employeeLoginForm.value.password;
  }

}


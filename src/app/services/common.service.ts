import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  validation_messages:any;
  private error_types = [];


  constructor() {
    this.getVMs();
  }

  getValidationMessage(formControls: any): string {
    let controls = Object.keys(formControls);
    let error_message = '';
    for (let i = 0; i < controls.length; ++i) {
      let control = formControls[controls[i]];
      if (control.invalid) {
        let error_status = false;
        for (let j = 0; j < this.error_types.length; ++j) {
          if (control.hasError(this.error_types[j])) {
            if (this.validation_messages[controls[i]] && this.validation_messages[controls[i]][this.error_types[j]]) {
              error_message = this.validation_messages[controls[i]][this.error_types[j]];
              error_status = true;
            }
            break;
          }
        }
        if (!error_status) {
          error_message = ((this.validation_messages[controls[i]] && this.validation_messages[controls[i]]['disp']) || controls[i]) + " is invalid";
        }
        break;
      }
    }
    return error_message;
  }

  getVMs() {
    this.validation_messages = {
      email: {
        disp: 'Email',
        required: 'Please enter th eemail'
      },
      password: {
        disp: 'Password',
        required: 'Please enter the password'
      }
    }
  }
}

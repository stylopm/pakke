import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidationErrors } from '@angular/forms';
import { ValidationsService } from '@helpers/validations';
import { InvalidFormField } from '@helpers/invalidFormField'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup;
  invalidFormField = InvalidFormField;
  constructor(private fb: FormBuilder, private vs: ValidationsService) {
    this.createForm();
  }
  private createForm(): void {
    this.userForm = this.fb.group({
      email: [
        ,
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      pass: [, [Validators.required]],
      passConfirm: [, [Validators.required]],
    }, {
      validators: this.vs.equalPassword('pass', 'passConfirm')
    }
    );
  }
  save() {
    Object.keys(this.userForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.userForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  get pass2NoValido() {
    return (this.userForm.get('pass').value === this.userForm.get('passConfirm').value) ? false : true;
  }
}

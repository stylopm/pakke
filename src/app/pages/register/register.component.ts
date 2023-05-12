import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidationErrors } from '@angular/forms';
import { ValidationsService } from '@helpers/validations';
import { InvalidFormField } from '@helpers/invalidFormField'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
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

    alert("Dispara")
    console.log(this.userForm.value);
  }

  get pass2NoValido() {
    return (this.userForm.get('pass').value === this.userForm.get('passConfirm').value) ? false : true;
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationsService } from '@helpers/validations';
import { InvalidFormField } from '@helpers/invalidFormField';
import { UsersService}  from '@services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  userForm: FormGroup;
  invalidFormField = InvalidFormField;
  constructor(
    private fb: FormBuilder,
     private vs: ValidationsService,
     private us: UsersService
     ) {
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
      password: [, [Validators.required]],
      passwordConfirm: [, [Validators.required]],
    }, {
      validators: this.vs.equalPassword('password', 'passwordConfirm')
    }
    );
  }
  save() {
    console.log(this.userForm.value);
    this.us.logout(this.userForm.value).subscribe((res)=>{
        console.log(res);
    })
  }

  get pass2NoValido() {
    return (this.userForm.get('password').value === this.userForm.get('passwordConfirm').value) ? false : true;
  }
}

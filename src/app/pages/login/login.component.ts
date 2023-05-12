import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidationErrors } from '@angular/forms';
import { ValidationsService } from '@helpers/validations';
import { InvalidFormField } from '@helpers/invalidFormField'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userForm: FormGroup;
  invalidFormField = InvalidFormField;
  constructor(
    private fb: FormBuilder, 
    private router: Router
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
      pass: [, [Validators.required]],
      passConfirm: [, [Validators.required]],
    });
  }
  save() {
    alert("Dispara")
    console.log(this.userForm.value);
  }

  goToPageRegistre(){
    this.router.navigate(['registre']);
  }
}

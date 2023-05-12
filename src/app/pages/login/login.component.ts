import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvalidFormField } from '@helpers/invalidFormField'
import { Router } from '@angular/router';
import { UsersService } from '@services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userForm: FormGroup;
  invalidFormField = InvalidFormField;
  constructor(
    private fb: FormBuilder,
    private us: UsersService,
    private router: Router,
    private toastr: ToastrService,
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
      password: [, [Validators.required]]
    });
  }
  save() {
    this.us.login(this.userForm.value).subscribe((res) => {
      if (res['success']) {
        this.toastr.success('Bienvenido');
        this.router.navigate(['panel']);
      } else {
        this.toastr.warning(res['msg']);
      }
    })
  }

  goToPageRegistre() {
    this.router.navigate(['registre']);
  }
}

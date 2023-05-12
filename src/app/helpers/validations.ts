import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface ErrorValidate {
  [s: string]: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  constructor() { }
  equalPassword(pass1: string, pass2: string) {
    return (formGroup: FormGroup) =>
      (formGroup.controls[pass1].value === formGroup.controls[pass2].value) ?
        formGroup.controls[pass2].setErrors(null)
        :
        formGroup.controls[pass2].setErrors({ itIsNotSame: true });
  }
}

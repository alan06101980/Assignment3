import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^\d{10}$/.test(control.value);
    return valid ? null : { invalidPhone: { value: control.value } };
  };
}

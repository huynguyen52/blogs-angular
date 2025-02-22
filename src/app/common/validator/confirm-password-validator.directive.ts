import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
} from '@angular/forms';

export function confirmPasswordValidator(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get(password);
    const confirmPasswordControl = control.get(confirmPassword);
    const isMatching = passwordControl?.value === confirmPasswordControl?.value;
    if (!confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ required: true });
    } else if (!isMatching) {
      confirmPasswordControl?.setErrors({ incorrectMatching: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
    return null;
  };
}

// @Directive({
//   selector: '[appConfirmPasswordValidator]',
//   standalone: true,
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: ConfirmPasswordValidatorDirective,
//       multi: true,
//     },
//   ],
// })
// export class ConfirmPasswordValidatorDirective implements Validator {
//   validate(control: AbstractControl<any, any>): ValidationErrors | null {
//     return confirmPasswordValidator()(control);
//   }
// }

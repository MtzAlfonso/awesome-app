import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static noWhiteSpaceAtEnd(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (value && value.trimEnd().length !== value.length) {
      return { noWhiteSpaceAtEnd: true };
    }
    return null;
  }
}

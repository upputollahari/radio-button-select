import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export class DateValidator extends Validators{
  static timeValidator(formGroupValues: FormGroup): any {
    console.log(formGroupValues);
    const startDate = formGroupValues.get('startDate').value;
    const endDate = formGroupValues.get('endDate').value;
    if (startDate.toString() > endDate.toString()) {
      return {message:"start date should be less than end date"}
  }
  }
}
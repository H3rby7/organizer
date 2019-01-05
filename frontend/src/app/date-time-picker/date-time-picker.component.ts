import { Component, ViewChild, forwardRef } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

let count = 1;
const IDENTIFIER = 'datetimepicker';

const DATE_TIME_PICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimePickerComponent),
  multi: true
};

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [DATE_TIME_PICKER_VALUE_ACCESSOR],
})
export class DateTimePickerComponent implements ControlValueAccessor {

  id = IDENTIFIER + (count++);
  required = true;
  disabled = false;

  changeFn = (e) => { };
  touchFn = (e) => { };
  validatorFn = (e) => { };

  datePickerDate: NgbDateStruct = { year: null, month: null, day: null };
  time = '';

  @ViewChild('d') datePicker: any;

  constructor() {

  }

  change() {
    return this.changeFn(this.dateFromData());
  }

  /* Interface implementations to use as form component */

  writeValue(input: any): void {
    if (!input) {
      return;
    }
    input = new Date(input);
    this.datePickerDate.day = input.getDate();
    this.datePickerDate.month = input.getMonth() + 1;
    this.datePickerDate.year = input.getFullYear();
    const h = input.getHours();
    const m = input.getMinutes();
    this.time = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  dateFromData() {
    if (!this.datePickerDate || !this.time || this.time === '') {
      return null;
    }
    const nextDate = new Date();
    nextDate.setDate(this.datePickerDate.day);
    nextDate.setMonth(this.datePickerDate.month - 1);
    nextDate.setFullYear(this.datePickerDate.year);
    const times = this.time.split(':');
    nextDate.setHours(parseInt(times[0], 10));
    nextDate.setMinutes(parseInt(times[1], 10));
    return nextDate;
  }

}

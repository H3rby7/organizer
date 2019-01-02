import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbInputDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { noop } from 'rxjs';

let count = 1;
const IDENTIFIER = 'datetimepicker';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor, Validator {

  id = IDENTIFIER + (count++);
  required = true;
  disabled = false;

  changeFn = (e) => {};
  touchFn = (e) => {};
  validatorFn = (e) => {};

  datePickerDate: NgbDateStruct;
  time = "19:00";

  @ViewChild('d') datePicker: NgbInputDatepicker;
  @ViewChild('t') timeInput: HTMLInputElement;

  constructor() {
    
  }

  ngOnInit() {
    this.writeValue(new Date());
  }

  change() {
    /* emit new value */
    if (!this.datePickerDate || !this.time || this.time === '') {
      return this.changeFn(null);
    }
    const nextDate = new Date();
    nextDate.setDate(this.datePickerDate.day);
    nextDate.setMonth(this.datePickerDate.month - 1);
    nextDate.setFullYear(this.datePickerDate.year);
    const times = this.time.split(':');
    nextDate.setHours(parseInt(times[0], 10));
    nextDate.setMinutes(parseInt(times[1], 10));
    this.changeFn(nextDate);
  }

  /* Interface implementations to use as form component */

  registerOnValidatorChange?(fn: () => void): void {
    this.validatorFn = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    const errs: ValidationErrors = this.datePicker.validate;
    if (this.timeInput.validationMessage !== '') {
      errs['time'] = this.timeInput.validationMessage;
    }
    return errs.length > 0 ? errs : null;
  }

  writeValue(input: Date): void {
    this.datePickerDate = {
      day: input.getDate(),
      month: input.getMonth() + 1,
      year: input.getFullYear()
    }
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

}

import { Component, ViewChild, forwardRef, Input, ModuleWithComponentFactories } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';
import  * as Moment from 'moment/moment';

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

  @Input()
  id = IDENTIFIER + (count++);

  @Input()
  name = this.id;

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

  writeValue(input: Moment.MomentInput): void {
    if (!input) {
      return;
    }
    const asDate = Moment.utc(input);
    this.datePickerDate.day = asDate.date();
    this.datePickerDate.month = asDate.month() + 1;
    this.datePickerDate.year = asDate.year();
    const h = asDate.hour();
    const m = asDate.minute();
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

  dateFromData(): String {
    if (!this.datePickerDate || !this.time || this.time === '') {
      return null;
    }
    const nextDate = Moment.utc(Date.now());
    const times = this.time.split(':');
    nextDate.hours(parseInt(times[0], 10));
    nextDate.minutes(parseInt(times[1], 10));
    nextDate.seconds(0);
    nextDate.milliseconds(0);
    nextDate.days(this.datePickerDate.day);
    nextDate.month(this.datePickerDate.month - 1);
    nextDate.year(this.datePickerDate.year);
    return nextDate.toISOString();
  }

}

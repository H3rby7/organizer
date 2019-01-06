import { DateTimePickerModule } from './date-time-picker.module';

describe('DateTimePicker Module', () => {
  let module: DateTimePickerModule;

  beforeEach(() => {
    module = new DateTimePickerModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});

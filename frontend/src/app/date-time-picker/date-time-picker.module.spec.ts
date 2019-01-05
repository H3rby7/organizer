import { DateTimePickerModule } from './date-time-picker.module';

describe('EventCommonModule', () => {
  let module: DateTimePickerModule;

  beforeEach(() => {
    module = new DateTimePickerModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});

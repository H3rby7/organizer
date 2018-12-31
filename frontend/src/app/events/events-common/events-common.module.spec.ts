import { EventCommonModule } from './events-common.module';

describe('EventCommonModule', () => {
  let eventCommonModule: EventCommonModule;

  beforeEach(() => {
    eventCommonModule = new EventCommonModule();
  });

  it('should create an instance', () => {
    expect(eventCommonModule).toBeTruthy();
  });
});

import { EventAdminModule } from './events-admin.module';

describe('EventAdminModule', () => {
  let eventAdminModule: EventAdminModule;

  beforeEach(() => {
    eventAdminModule = new EventAdminModule();
  });

  it('should create an instance', () => {
    expect(eventAdminModule).toBeTruthy();
  });
});

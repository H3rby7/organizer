import { EventAdminRoutingModule } from './events-admin-routing.module';

describe('AdminRoutingModule', () => {
  let adminRoutingModule: EventAdminRoutingModule;

  beforeEach(() => {
    adminRoutingModule = new EventAdminRoutingModule();
  });

  it('should create an instance', () => {
    expect(adminRoutingModule).toBeTruthy();
  });
});

import { MemberAdminRoutingModule } from './member-admin-routing.module';

describe('AdminRoutingModule', () => {
  let adminRoutingModule: MemberAdminRoutingModule;

  beforeEach(() => {
    adminRoutingModule = new MemberAdminRoutingModule();
  });

  it('should create an instance', () => {
    expect(adminRoutingModule).toBeTruthy();
  });
});

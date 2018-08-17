import { MemberAdminModule } from './member-admin.module';

describe('MemberAdminModule', () => {
  let memberAdminModule: MemberAdminModule;

  beforeEach(() => {
    memberAdminModule = new MemberAdminModule();
  });

  it('should create an instance', () => {
    expect(memberAdminModule).toBeTruthy();
  });
});

import { MemberCommonModule } from './member-common.module';

describe('MemberCommonModule', () => {
  let memberCommonModule: MemberCommonModule;

  beforeEach(() => {
    memberCommonModule = new MemberCommonModule();
  });

  it('should create an instance', () => {
    expect(memberCommonModule).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { MemberAdminService } from './member-admin.service';

describe('MemberAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberAdminService]
    });
  });

  it('should be created', inject([MemberAdminService], (service: MemberAdminService) => {
    expect(service).toBeTruthy();
  }));
});

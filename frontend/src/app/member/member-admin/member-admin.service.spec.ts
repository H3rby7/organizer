import { TestBed, inject } from '@angular/core/testing';

import { MemberAdminService } from './member-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MemberAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberAdminService]
    });
  });

  it('should be created', inject([MemberAdminService], (service: MemberAdminService) => {
    expect(service).toBeTruthy();
  }));
});

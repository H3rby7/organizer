import { TestBed, inject } from '@angular/core/testing';

import { MemberCommonService } from './member-common.service';

describe('MemberCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberCommonService]
    });
  });

  it('should be created', inject([MemberCommonService], (service: MemberCommonService) => {
    expect(service).toBeTruthy();
  }));
});

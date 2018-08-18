import { TestBed, inject } from '@angular/core/testing';

import { MemberCommonService } from './member-common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MemberCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberCommonService]
    });
  });

  it('should be created', inject([MemberCommonService], (service: MemberCommonService) => {
    expect(service).toBeTruthy();
  }));
});

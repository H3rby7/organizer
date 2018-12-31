import { TestBed, inject } from '@angular/core/testing';

import { EventCommonService } from './events-common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventCommonService]
    });
  });

  it('should be created', inject([EventCommonService], (service: EventCommonService) => {
    expect(service).toBeTruthy();
  }));
});

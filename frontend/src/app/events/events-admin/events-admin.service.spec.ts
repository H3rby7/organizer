import { TestBed, inject } from '@angular/core/testing';

import { EventAdminService } from './events-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventAdminService]
    });
  });

  it('should be created', inject([EventAdminService], (service: EventAdminService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdminComponent } from './events-admin-main.component';
import { EventAdminService } from '../events-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { EventCommonModule } from '../../events-common/events-common.module';

describe('EventAdminDashboardComponent', () => {
  let component: EventAdminComponent;
  let fixture: ComponentFixture<EventAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, EventCommonModule],
      providers: [EventAdminService],
      declarations: [ EventAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

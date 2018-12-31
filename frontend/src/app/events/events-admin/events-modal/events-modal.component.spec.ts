import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalComponent } from './events-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventAdminService } from '../events-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AddMemberModalComponent', () => {
  let component: EventModalComponent;
  let fixture: ComponentFixture<EventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [NgbActiveModal, EventAdminService],
      declarations: [EventModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

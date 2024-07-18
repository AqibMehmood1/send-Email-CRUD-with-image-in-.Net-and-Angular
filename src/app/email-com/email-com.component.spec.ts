import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComComponent } from './email-com.component';

describe('EmailComComponent', () => {
  let component: EmailComComponent;
  let fixture: ComponentFixture<EmailComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

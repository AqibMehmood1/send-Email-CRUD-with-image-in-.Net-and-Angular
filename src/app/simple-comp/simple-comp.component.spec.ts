import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCompComponent } from './simple-comp.component';

describe('SimpleCompComponent', () => {
  let component: SimpleCompComponent;
  let fixture: ComponentFixture<SimpleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

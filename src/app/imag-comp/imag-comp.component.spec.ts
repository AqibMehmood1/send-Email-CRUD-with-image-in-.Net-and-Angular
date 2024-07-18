import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagCompComponent } from './imag-comp.component';

describe('ImagCompComponent', () => {
  let component: ImagCompComponent;
  let fixture: ComponentFixture<ImagCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

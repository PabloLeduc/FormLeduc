import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHelpComponent } from './error-help.component';

describe('ErrorHelpComponent', () => {
  let component: ErrorHelpComponent;
  let fixture: ComponentFixture<ErrorHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

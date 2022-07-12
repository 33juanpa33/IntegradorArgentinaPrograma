import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgenProComponent } from './logo-argen-pro.component';

describe('LogoArgenProComponent', () => {
  let component: LogoArgenProComponent;
  let fixture: ComponentFixture<LogoArgenProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgenProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoArgenProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

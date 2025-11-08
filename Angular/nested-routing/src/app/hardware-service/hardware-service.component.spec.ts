import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareServiceComponent } from './hardware-service.component';

describe('HardwareServiceComponent', () => {
  let component: HardwareServiceComponent;
  let fixture: ComponentFixture<HardwareServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HardwareServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

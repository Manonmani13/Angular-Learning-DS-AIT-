import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1homeComponent } from './m1home.component';

describe('M1homeComponent', () => {
  let component: M1homeComponent;
  let fixture: ComponentFixture<M1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [M1homeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

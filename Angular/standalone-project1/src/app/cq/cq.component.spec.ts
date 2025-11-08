import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqComponent } from './cq.component';

describe('CqComponent', () => {
  let component: CqComponent;
  let fixture: ComponentFixture<CqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

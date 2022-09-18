import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumaCardComponent } from './truma-card.component';

describe('TrumaCardComponent', () => {
  let component: TrumaCardComponent;
  let fixture: ComponentFixture<TrumaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrumaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

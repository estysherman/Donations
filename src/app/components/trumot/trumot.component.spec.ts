import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumotComponent } from './trumot.component';

describe('TrumotComponent', () => {
  let component: TrumotComponent;
  let fixture: ComponentFixture<TrumotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrumotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

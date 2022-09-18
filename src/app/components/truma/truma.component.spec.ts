import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumaComponent } from './truma.component';

describe('TrumaComponent', () => {
  let component: TrumaComponent;
  let fixture: ComponentFixture<TrumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

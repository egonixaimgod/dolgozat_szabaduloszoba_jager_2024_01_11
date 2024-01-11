import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasokGETComponent } from './foglalasok-get.component';

describe('FoglalasokGETComponent', () => {
  let component: FoglalasokGETComponent;
  let fixture: ComponentFixture<FoglalasokGETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoglalasokGETComponent]
    });
    fixture = TestBed.createComponent(FoglalasokGETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasokPOSTComponent } from './foglalasok-post.component';

describe('FoglalasokPOSTComponent', () => {
  let component: FoglalasokPOSTComponent;
  let fixture: ComponentFixture<FoglalasokPOSTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoglalasokPOSTComponent]
    });
    fixture = TestBed.createComponent(FoglalasokPOSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

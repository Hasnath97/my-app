import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDailogComponent } from './dummy-dailog.component';

describe('DummyDailogComponent', () => {
  let component: DummyDailogComponent;
  let fixture: ComponentFixture<DummyDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

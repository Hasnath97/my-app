import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatablindingComponent } from './datablinding.component';

describe('DatablindingComponent', () => {
  let component: DatablindingComponent;
  let fixture: ComponentFixture<DatablindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatablindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatablindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

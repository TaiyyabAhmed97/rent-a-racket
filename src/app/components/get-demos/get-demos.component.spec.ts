import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemosComponent } from './get-demos.component';

describe('GetDemosComponent', () => {
  let component: GetDemosComponent;
  let fixture: ComponentFixture<GetDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

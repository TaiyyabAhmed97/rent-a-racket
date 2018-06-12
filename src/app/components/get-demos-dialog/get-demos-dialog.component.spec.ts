import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemosDialogComponent } from './get-demos-dialog.component';

describe('GetDemosDialogComponent', () => {
  let component: GetDemosDialogComponent;
  let fixture: ComponentFixture<GetDemosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDemosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDemosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

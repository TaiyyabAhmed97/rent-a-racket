import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailDialogComponent } from './demo-detail-dialog.component';

describe('DemoDetailDialogComponent', () => {
  let component: DemoDetailDialogComponent;
  let fixture: ComponentFixture<DemoDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

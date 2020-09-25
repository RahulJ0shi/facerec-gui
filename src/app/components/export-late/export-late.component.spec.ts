import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLateComponent } from './export-late.component';

describe('ExportLateComponent', () => {
  let component: ExportLateComponent;
  let fixture: ComponentFixture<ExportLateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportLateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

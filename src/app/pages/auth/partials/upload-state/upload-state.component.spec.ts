import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStateComponent } from './upload-state.component';

describe('UploadStateComponent', () => {
  let component: UploadStateComponent;
  let fixture: ComponentFixture<UploadStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

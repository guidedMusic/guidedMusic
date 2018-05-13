import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPanelComponent } from './head-panel.component';

describe('HeadPanelComponent', () => {
  let component: HeadPanelComponent;
  let fixture: ComponentFixture<HeadPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

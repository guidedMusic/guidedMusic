import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XPathComponent } from './x-path.component';

describe('XPathComponent', () => {
  let component: XPathComponent;
  let fixture: ComponentFixture<XPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementnativeComponent } from './elementnative.component';

describe('ElementnativeComponent', () => {
  let component: ElementnativeComponent;
  let fixture: ComponentFixture<ElementnativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementnativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementnativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

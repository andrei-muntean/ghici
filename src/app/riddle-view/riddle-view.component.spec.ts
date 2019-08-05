import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleViewComponent } from './riddle-view.component';

describe('RiddleViewComponent', () => {
  let component: RiddleViewComponent;
  let fixture: ComponentFixture<RiddleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

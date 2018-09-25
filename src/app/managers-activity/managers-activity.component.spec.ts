import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersActivityComponent } from './managers-activity.component';

describe('ManagersActivityComponent', () => {
  let component: ManagersActivityComponent;
  let fixture: ComponentFixture<ManagersActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

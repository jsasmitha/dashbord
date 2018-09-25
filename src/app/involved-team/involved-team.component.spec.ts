import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedTeamComponent } from './involved-team.component';

describe('InvolvedTeamComponent', () => {
  let component: InvolvedTeamComponent;
  let fixture: ComponentFixture<InvolvedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

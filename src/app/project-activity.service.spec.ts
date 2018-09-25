import { TestBed } from '@angular/core/testing';

import { ProjectActivityService } from './project-activity.service';

describe('ProjectActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectActivityService = TestBed.get(ProjectActivityService);
    expect(service).toBeTruthy();
  });
});

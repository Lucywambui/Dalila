import { TestBed } from '@angular/core/testing';

import { PageElementsService } from './page-elements.service';

describe('PageElementsService', () => {
  let service: PageElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

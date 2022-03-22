import { TestBed } from '@angular/core/testing';

import { PizzaListService } from './pizza-list.service';

describe('PizzaListService', () => {
  let service: PizzaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {TestBed} from '@angular/core/testing';

import {TankstelleService} from './tankstelle.service';

describe('TankstelleService', () => {
  let service: TankstelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TankstelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Data', () => {
  let service: DataService;
    
  beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(DataService);
    });
    
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});

import {getTestBed, TestBed} from '@angular/core/testing';
import {BrowseModule, BrowseComponent} from './';

require('should');

describe('the browse page should show', () => {
  let element;

  it('header');
  it('sidebar');
  it('footer');
  it('products');

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [BrowseModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(BrowseComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

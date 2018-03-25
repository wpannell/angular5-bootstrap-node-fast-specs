import {getTestBed, TestBed} from '@angular/core/testing';
import {BrowseModule, BrowseComponent} from './';

require('should');

describe('the browse page should show', () => {
  let element;

  it('header', () => {
    element.querySelector('a[rel=header-home]').textContent.should.containEql('Home');
  });
  it('sidebar', () => {
    element.querySelector('span[rel=sidenav-mixes]').textContent.should.containEql('Mixes & Repairs');
  });
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

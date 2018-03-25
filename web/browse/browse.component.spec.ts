import {getTestBed, TestBed} from '@angular/core/testing';
import {BrowseModule, BrowseComponent} from './';

require('should');

describe('the browse page should show', () => {
  let element;

  it('header', () => {
    element.querySelector('a[rel=header-home]').textContent.should.containEql('Home');
  });

  it('the sidebar', () => {
    element.querySelector('h6[rel=sidebar]').textContent.should.containEql('Mixes');
  });

  it('a footer', () => {
    element.querySelector('span[rel=footer-text]').textContent.should.containEql('Cementz');
  });

  it('products', () => {
    element.querySelector('img[rel=product-img]').src.should.not.be.empty();
  });

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

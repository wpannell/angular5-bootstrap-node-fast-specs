import {getTestBed, TestBed} from '@angular/core/testing';
import {RootModule} from './root.module';
import {RootComponent} from './root.component';

require('should');

describe('host page should show', () => {
  let element;

  it('the sidebar', () => {
    element.querySelector('h6[rel=sidebar]').textContent.should.containEql('Mixes');
  });

  it('an image in the card', () => {
    element.querySelector('img[rel=product-img]').src.should.not.be.empty();
  });

  it('the retail price', () => {
    element.querySelector('h6[rel=product-price]').textContent.should.containEql('100.00');
  });

  it('the description', () => {
    element.querySelector('p[rel=product-description]').textContent.should.containEql('quick example');
  });

  it('the add to cart button', () => {
    element.querySelector('a[rel=product-addtocart]').textContent.should.containEql('Add to cart');
  });

  it('a footer', () => {
    element.querySelector('span[rel=footer]').textContent.should.containEql('Cementz');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [RootModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

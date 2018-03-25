import {getTestBed, TestBed} from '@angular/core/testing';
import {TileModule, TileComponent} from './';

require('should');

describe('the products page should show', () => {
  let element;

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

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [TileModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TileComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

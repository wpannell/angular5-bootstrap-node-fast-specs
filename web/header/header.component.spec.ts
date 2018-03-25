import {getTestBed, TestBed} from '@angular/core/testing';
import {HeaderModule, HeaderComponent} from './';

require('should');

describe('the navbar should show', () => {
  let element;

  it('home', () => {
    element.querySelector('a[rel=header-home]').textContent.should.containEql('Home');
  });

  it('view cart', () => {
    element.querySelector('a[rel=header-cart]').textContent.should.containEql('View Cart');
  });

  it('checkout', () => {
    element.querySelector('a[rel=header-checkout]').textContent.should.containEql('Checkout');
  });



  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HeaderModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

import {getTestBed, TestBed} from '@angular/core/testing';
import {FooterModule, FooterComponent} from './';

require('should');

describe('the footer should show', () => {
  let element;

  it('a footer', () => {
    element.querySelector('span[rel=footer-text]').textContent.should.containEql('Cementz');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [FooterModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

import {getTestBed, TestBed} from '@angular/core/testing';
import {RootModule} from './root.module';
import {RootComponent} from './root.component';

require('should');

describe('host page should show', () => {
  let element;

  it('the navbar', () => {
    element.querySelector('a[rel=navbar]').textContent.should.containEql('Home');
  });

  it('the sidebar', () => {
    element.querySelector('h6[rel=sidebar]').textContent.should.containEql('Mixes');
  });

  it('an image in the card', () => {
    element.querySelector('img[rel=card-img]').src.should.not.be.empty();
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

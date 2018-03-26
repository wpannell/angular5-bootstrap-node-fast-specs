import {getTestBed, TestBed} from '@angular/core/testing';
import {TestModule, TestComponent} from './';

require('should');

describe('the test page should show', () => {
  let element;

  it('h1', () => {
    element.querySelector('h1').textContent.should.containEql('hey!');
  });


  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [TestModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

import {getTestBed, TestBed} from '@angular/core/testing';
import {RootModule} from './root.module';
import {RootComponent} from './root.component';

require('should');

describe('host page should show', () => {
  let element;

  it('hello world', () => {
    element.querySelector('h1').textContent.should.containEql('hello world!');
  });

  it('hi button', () => {
    element.querySelector('button[rel=hi-button]').textContent.should.containEql('Hi');
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

import {getTestBed, TestBed} from '@angular/core/testing';
import { HeaderComponent } from './header.component';

require('should');

describe('grid header should show', () => {
  let element;

  it('a logo on the left', () => {
    element.querySelector('img[rel=logo-left]').src.should.containEql('img/aa');
  });

  it('a logo on the right', () => {
    element.querySelector('img[rel=logo-right]').src.should.containEql('img/oneworld');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
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

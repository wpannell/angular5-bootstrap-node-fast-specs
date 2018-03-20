import {getTestBed, TestBed} from '@angular/core/testing';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';

require('should');

describe('host page should show', () => {
  let element;

  it('a logo on the left', () => {
    element.querySelector('img[rel=logo-left]').src.should.containEql('img/aa');
  });

  it('a logo on the right', () => {
    element.querySelector('img[rel=logo-right]').src.should.containEql('img/oneworld');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

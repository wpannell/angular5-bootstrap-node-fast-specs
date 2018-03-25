import {getTestBed, TestBed} from '@angular/core/testing';
import {RootModule} from './root.module';
import {RootComponent} from './root.component';

require('should');

describe('host page should show', () => {
  let element;

  it('canary spec', () => {
    true.should.be.true();
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

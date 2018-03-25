import {getTestBed, TestBed} from '@angular/core/testing';
import {SidenavModule, SidenavComponent} from './';

require('should');

describe('the navbar should show', () => {
  let element;

  it('Mixes and Repairs section', () => {
    element.querySelector('span[rel=sidenav-mixes]').textContent.should.containEql('Mixes & Repairs');
  });

  it('Concrete Materials section', () => {
    element.querySelector('span[rel=sidenav-concrete]').textContent.should.containEql('Concrete Materials');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [SidenavModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(SidenavComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

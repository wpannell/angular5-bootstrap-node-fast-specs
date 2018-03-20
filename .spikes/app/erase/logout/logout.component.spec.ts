import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {LogoutModule} from './';

require('should');

@Component({selector: '', template: '<logout dpo="gary"></logout>'})
class HostComponent {}

function extractRenderedTextFrom(domElement) {
  return domElement.querySelector('h3[rel=dpo]').textContent;
}

describe('logout', () => {
  let domElement;
  let fixture: ComponentFixture<HostComponent>;

  it('shows the logged in DPO', () => {
    let renderedText = extractRenderedTextFrom(domElement);
    renderedText.should.not.containEql('gary');

    fixture.detectChanges();

    renderedText = extractRenderedTextFrom(domElement);
    renderedText.should.containEql('gary');
  });

  it('shows a logout link', () => {
    const link = domElement.querySelector('a').textContent;
    link.should.containEql('Logout');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LogoutModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    domElement = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

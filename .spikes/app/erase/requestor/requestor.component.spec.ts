import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {RequestorModule} from './';
import {getComponent} from '@angular/core/src/linker/component_factory_resolver';

require('should');

@Component({selector: '', template: '<requestor [details]="details"></requestor>'})
class HostComponent {
  details: any;
}

const requestorDetails = {
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'firstName': 'Bill',
  'lastName': 'Smith',
  'status': 'IN_PROGRESS',
  'cupids': ['0123456789', '012345679', '01234789', '0789', '056789', '09', '0', '01', '0123', '456789'],
  'created': '02-02-2018'
};

describe('requestor shows the', () => {
  let domElement;
  let fixture: ComponentFixture<HostComponent>;
  let component;


  it('first-name-last-name', () => {
      let renderedText = domElement.querySelector('p[rel=first-name-last-name]').textContent;
      renderedText.should.not.containEql('Bill Smith');

      fixture.detectChanges();

      renderedText = domElement.querySelector('p[rel=first-name-last-name]').textContent;
      renderedText.should.containEql('Bill Smith');
    });

  it('requestId', () => {
    let renderedText = domElement.querySelector('p[rel=requestId]').textContent;
    renderedText.should.not.containEql('0106ef8273320eb372de1afaf304a89b');

    fixture.detectChanges();

    renderedText = domElement.querySelector('p[rel=requestId]').textContent;
    renderedText.should.containEql('0106ef8273320eb372de1afaf304a89b');
  });

  it('created', () => {
    let renderedText = domElement.querySelector('p[rel=created]').textContent;
    renderedText.should.not.containEql('02-02-2018');

    fixture.detectChanges();

    renderedText = domElement.querySelector('p[rel=created]').textContent;
    renderedText.should.containEql('02-02-2018');
  });

  it('status', () => {
    let renderedText = domElement.querySelector('p[rel=status]').textContent;
    renderedText.should.not.containEql('IN_PROGRESS');

    fixture.detectChanges();

    renderedText = domElement.querySelector('p[rel=status]').textContent;
    renderedText.should.containEql('IN_PROGRESS');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [RequestorModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    domElement = fixture.nativeElement;
    component = fixture.componentInstance;
    component.details = requestorDetails;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

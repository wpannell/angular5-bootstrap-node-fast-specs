import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {OptionsPanelModule} from './';

require('should');

@Component({selector: '', template: '<options-panel [details]="details"></options-panel>'})
class HostComponent {
  details: any;
}

const requestorDetails = {
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'firstName': 'Bill',
  'lastName': 'Smith',
  'status': 'IN_PROGRESS',
  'assignTo': 'giselle',
  'cupids': ['0123456789', '012345679', '01234789', '0789', '056789', '09', '0', '01', '0123', '456789'],
  'created': '02-02-2018'
};

describe('Options Panel shows the', () => {
  let domElement;
  let fixture: ComponentFixture<HostComponent>;
  let component;

  it('assignTo', () => {
    let renderedText = domElement.querySelector('p[rel=assignTo]').textContent;
    renderedText.should.not.containEql('giselle');
    fixture.detectChanges();

    renderedText = domElement.querySelector('p[rel=assignTo]').textContent;
    renderedText.should.containEql('giselle');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [OptionsPanelModule]
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

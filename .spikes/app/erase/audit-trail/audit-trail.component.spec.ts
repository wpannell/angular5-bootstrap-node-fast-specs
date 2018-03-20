import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {AuditTrailModule} from './';
import {By} from '@angular/platform-browser';

require('should');

@Component({selector: '', template: '<audit-trail [details]="details" title="Erase Request"></audit-trail>'})
class HostComponent {
  details: any;
}

const details = {
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'firstName': 'Bill',
  'lastName': 'Smith',
  'status': 'IN_PROGRESS',
  'assignTo': 'giselle',
  'cupids': [
    '0123456789',
    '012345679',
    '01234789',
    '0789',
    '056789',
    '09',
    '0',
    '01',
    '0123',
    '456789'
  ],
  'head': ['0123456789'],
  'tail': [
      '012345679',
      '01234789',
      '0789',
      '056789',
      '09',
      '0',
      '01',
      '0123',
      '456789'
    ],
  'created': '02-02-2018',
  'history': [{
    'title': 'Request Submitted',
    'createdBy': 'tatiana',
    'timestamp': '06:25 28 December 1974',
    'message': 'Complete by eswar and marcella',
    'isInternal': false
  }, {
    'title': 'System Post',
    'createdBy': 'marcella',
    'timestamp': '06:25 28 December 1974',
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }, {
    'title': 'System Post',
    'createdBy': 'eswar',
    'timestamp': 1517500934159,
    'message': 'Complete by eswar and marcella',
    'isInternal': false
  }, {
    'title': 'System Post',
    'createdBy': 'tatiana',
    'timestamp': 1517515004159,
    'message': 'Complete by tatiana and marcella',
    'isInternal': true
  }, {
    'title': 'System Post',
    'createdBy': 'giselle',
    'timestamp': 15159,
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }]
};

function textNodeFrom(domElement, selector: string): string {
  return domElement.querySelector(selector).textContent;
}

function getFirstPostFromContainer(debugElement: DebugElement, index: number) {
  const postContainer = debugElement.queryAll(By.css('a[rel=post]'));
  return postContainer[index];
}

describe('audit trail', () => {
  let fixture: ComponentFixture<HostComponent>;
  let domElement;
  let component;

  it(`shows a title: Erase Request`, () => {
    fixture.detectChanges();

    textNodeFrom(domElement, `h1[rel=title]`)
        .should.equal(`Erase Request`);
  });

  it(`has a make decision button`, () => {
    fixture.detectChanges();

    textNodeFrom(domElement, `button[rel=make-decision]`)
        .should.containEql('Make Decision');
  });

  it(`has 5 history posts`, () => {
    fixture.detectChanges();
    const postContainer =  fixture.debugElement.queryAll(By.css(`a[rel=post]`));
    postContainer.length.should.equal(5);
  });

  const FIRST = 0;
  context(`the first post has`, () => {
    it(`title in the first: Request Submitted`, () => {
      fixture.detectChanges();
      const post = getFirstPostFromContainer(fixture.debugElement, FIRST);

      textNodeFrom(post.nativeElement, `h5[rel=post-title]`)
          .should.containEql(`Request Submitted`);
    });

    it(`timestamp in the second: 06:25 28 December 1974`, () => {
      fixture.detectChanges();
      const post = getFirstPostFromContainer(fixture.debugElement, FIRST);

      textNodeFrom(post.nativeElement, `small[rel=timestamp]`)
          .should.containEql(`06:25 28 December 1974`);
    });

    it(`message in the third: Complete by eswar and marcella`, () => {
      fixture.detectChanges();
      const post = getFirstPostFromContainer(fixture.debugElement, FIRST);

      textNodeFrom(post.nativeElement, `P[rel=message]`)
          .should.containEql(`Complete by eswar and marcella`);
    });

    it(`'created by' in the fourth: tatiana`, () => {
      fixture.detectChanges();
      const post = getFirstPostFromContainer(fixture.debugElement, FIRST);

      textNodeFrom(post.nativeElement, `small[rel=created-by]`)
          .should.containEql(`tatiana`);
    });
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [AuditTrailModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    domElement = fixture.nativeElement;
    component = fixture.componentInstance;
    component.details = details;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});

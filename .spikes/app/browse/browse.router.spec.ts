import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {RouterTestingModule} from '@angular/router/testing';
import {getTestBed, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import {RoutingModule, routes} from '../../router';
import {BrowseModule} from './';
import {BrowseComponent} from './browse.component';
import {NavigatorModule} from '../../navigate';
import {EraseModule} from '../erase';

require('should');

describe('browse router', () => {
  let location: Location;
  let router: Router;
  let fixture;

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`navigates redirects to /`, () => {
    return router.navigate(['']).then(() => {
      location.path().should.equal('/');
    });
  });

  it(`goes to /erase`, () => {
    return router.navigate(['erase', 'id']).then(() => {
      location.path().should.equal('/erase/id');
    });
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [
        RoutingModule,
        RouterTestingModule.withRoutes(routes),
        BrowseModule,
        EraseModule,
        NavigatorModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: ''}
      ]
    });
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(BrowseComponent);
    router.initialNavigation();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});


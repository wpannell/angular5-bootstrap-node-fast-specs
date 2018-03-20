//http://tonylukasavage.com/blog/2014/05/29/custom-assertions-in-should-dot-js

//noinspection JSUnresolvedVariable
import R from 'ramda';
import should from 'should';
import td from 'testdouble';

const {replace, when, verify, reset} = td;

td.config({
  promiseConstructor: require('bluebird')
});

global.context = describe;
global.td = td;

afterEach(() => {
  reset();
});

export {R, should, replace, when, verify, reset};

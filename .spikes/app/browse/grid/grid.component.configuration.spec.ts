const R = require('ramda');
const td = require('testdouble');
const {replace, when, verify, reset, config} = td;

require('should');

describe('grid', () => {
  let GridComponent = null;
  let grid = null;
  let findByHeaderName = null;

  beforeEach(() => {
    GridComponent = require('./grid.component').GridComponent;
    grid = new GridComponent();
    findByHeaderName = R.find(R.propEq('headerName'));
  });

  afterEach(() => reset());

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`is configurable`, () => {
    grid.columnDefinitions.length.should.be.greaterThan(0);
  });

  it(`will highlight selected row`, () => {
    grid.rowSelection.should.equal('single');
  });

  it(`has "Request Id" column definition`, () => {
      const columnDefinitions = grid.columnDefinitions;
      R.contains({
        headerName: 'Request Id',
        field: 'requestId',
        suppressFilter: false,
        suppressSorting: true
      }, columnDefinitions).should.be.true();
  });

  it(`has "Request Type" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Request Type',
      field: 'type'
    }, columnDefinitions).should.be.true();
  });

  it(`has "First Name" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'First Name',
      field: 'firstName',
      suppressFilter: true,
      suppressSorting: true
    }, columnDefinitions).should.be.true();
  });

  it(`has "Last Name" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Last Name',
      field: 'lastName',
      suppressFilter: true,
      suppressSorting: true
    }, columnDefinitions).should.be.true();
  });

  it(`has "Last Updated" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Last Updated',
      field: 'lastUpdated',
      suppressFilter: true,
      suppressSorting: true
    }, columnDefinitions).should.be.true();
  });

  it(`has "Request Age" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Request Age',
      field: 'age',
      suppressFilter: true,
      sort: 'desc'
    }, columnDefinitions).should.be.true();
  });

  it(`hides "Created" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Created',
      field: 'created',
      hide: true,
      suppressFilter: true,
      suppressSorting: true
    }, columnDefinitions).should.be.true();
  });

  it(`has "Assign To" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Assign To',
      field: 'assignTo',
      suppressSorting: true
    }, columnDefinitions).should.be.true();
  });

  it(`has "Status" column definition`, () => {
    const columnDefinitions = grid.columnDefinitions;
    R.contains({
      headerName: 'Status',
      field: 'status'
    }, columnDefinitions).should.be.true();
  });

  it(`can filter`, () => {
    const gridOptions = grid.gridOptions;
    gridOptions.enableFilter.should.be.true();
  });

  it(`can sort`, () => {
    const gridOptions = grid.gridOptions;
    gridOptions.enableSorting.should.be.true();
  });

  it(`can page`, () => {
    const gridOptions = grid.gridOptions;
    gridOptions.pagination.should.be.true();
  });

  it(`has column definitions`, () => {
    const gridOptions = grid.gridOptions;
    gridOptions.columnDefs.should.deepEqual(grid.columnDefinitions);
  });

  it(`filters on Status`, () => {
    const definition = R.find(R.propEq('headerName', 'Status'))(grid.columnDefinitions);
    R.isNil(definition.suppressFilter).should.be.true();
  });

  it(`sorts on Status`, () => {
    const definition = R.find(R.propEq('headerName', 'Status'))(grid.columnDefinitions);
    R.isNil(definition.suppressSorting).should.be.true();
  });

  it(`sorts on Request Type`, () => {
    const definition = R.find(R.propEq('headerName', 'Request Type'))(grid.columnDefinitions);
    R.isNil(definition.suppressSorting).should.be.true();
  });

  it(`sorts on Request Age`, () => {
    const definition = R.find(R.propEq('headerName', 'Request Age'))(grid.columnDefinitions);
    R.isNil(definition.suppressSorting).should.be.true();
  });

  it(`filters on Request Type`, () => {
    const definition = R.find(R.propEq('headerName', 'Request Type'))(grid.columnDefinitions);
    R.isNil(definition.suppressFilter).should.be.true();
  });

  it(`filters on Assign To`, () => {
    const definition = R.find(R.propEq('headerName', 'Assign To'))(grid.columnDefinitions);
    R.isNil(definition.suppressFilter).should.be.true();
  });

  it(`does not filter on First Name`, () => {
    const definition = R.find(R.propEq('headerName', 'First Name'))(grid.columnDefinitions);
    definition.suppressFilter.should.be.true();
  });

  it(`does not sort on Last Name`, () => {
    const definition = R.find(R.propEq('headerName', 'Last Name'))(grid.columnDefinitions);
    definition.suppressFilter.should.be.true();
  });
});

export {};

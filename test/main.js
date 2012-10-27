require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../examples/solar/js/libs/jquery.min',
    underscore: '../examples/solar/js/libs/underscore.min',
    backbone: '../examples/solar/js/libs/backbone',
    handlebars: '../examples/solar/js/libs/handlebars',
    text: '../examples/solar/js/libs/text',
    datagrid: '../src/views/datagrid',
    'views/header': '../src/views/header',
    'views/row': '../src/views/row',
    'views/cell': '../src/views/cell',
    'views/header-cell': '../src/views/header-cell',
    'views/callback-cell': '../src/views/callback-cell',
    'views/pagination': '../src/views/pagination',
    'models/pager': '../src/models/pager',
    'models/sorter': '../src/models/sorter'
  },
  config: {
    hbs: {
      extension: 'hbs'
    }
  }
});

require([
  'backbone',
  'datagrid',
  'views/row',
  'views/cell',
  'views/callback-cell',
  'views/pagination',
  'models/pager'
], function(Backbone, Datagrid, Row, Cell, CallbackCell, Pagination, Pager) {
  window.Datagrid     = Datagrid;
  window.Row          = Row;
  window.Cell         = Cell;
  window.CallbackCell = CallbackCell;
  window.Pagination   = Pagination;
  window.Pager        = Pager;

  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});

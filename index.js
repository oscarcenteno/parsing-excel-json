const readXlsxFile = require('read-excel-file/node');

const schema = {
  'Module': {
    prop: 'module',
    type: String,
    required: true
  },
  'Functionality': {
    prop: 'option',
    type: String,
    required: true
  },
  'Entitlement': {
    prop: 'entitlement',
    type: String,
    required: true
  },
  'Description': {
    prop: 'functionality',
    type: String,
    required: true
  }
};

// File path.
readXlsxFile('./excel.xlsx', { schema, sheet: 'Functional' }).then((data) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  console.log(data.rows.length);

  // print
  data.rows.forEach(row => {
    console.info(row.module + ' / ' + row.option + ' / ' + row.functionality);
  });

})
var React           = require('react/addons');
var FixedDataTable  = require('fixed-data-table');
var Loading         = require('./Loading');

var Table   = FixedDataTable.Table;
var Column  = FixedDataTable.Column;

// Table data as a list of array.
var rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3']
];

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

var Widget = React.createClass({
  render: function () {
    return (
      <Table
        rowHeight={50}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        width={5000}
        height={5000}
        headerHeight={50}>
        <Column
          label="Col 1"
          width={3000}
          dataKey={0}
        />
        <Column
          label="Col 2"
          width={2000}
          dataKey={1}
        />
      </Table>
    );
  }
});

module.exports = Widget;
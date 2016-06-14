require('./bower_components/vaadin-charts/react');
var React = require('react');
var ReactDOM = require('react-dom');

var ColumnWithNegativeValues = React.createClass({
  getDefaultProps: function() {
    return {
      dataRevenue: [],
      dataExpenses: [],
      dataNetIncome: []
    };
  },
  render: function() {
    return (
      <vaadin-column-chart>
        <title>Earnings</title>
        <subtitle>2011 - 2014</subtitle>
        <x-axis>
          <categories>2011, 2012, 2013, 2014</categories>
        </x-axis>
        <y-axis>
          <title>B€</title>
        </y-axis>
        <tooltip is="" point-format="{series.name}: {point.y} B€"></tooltip>
        <data-series name="Revenue">
          <data>{this.props.dataRevenue.map(JSON.stringify).join(',')}
          </data>
        </data-series>
        <data-series name="Expenses">
          <data>{this.props.dataExpenses.map(JSON.stringify).join(',')}
          </data>
        </data-series>
        <data-series name="Net income">
          <data>{this.props.dataNetIncome.map(JSON.stringify).join(',')}
          </data>
        </data-series>
      </vaadin-column-chart>
    )
  }
});

ReactDOM.render(
  <ColumnWithNegativeValues
      dataRevenue={[ 1.5, 1.8, 1.2, 2.3 ]}
      dataExpenses={[ 1.2, 1.1, 1.3, 0.9 ]}
      dataNetIncome={[ -0.3, 0.7, -0.1, 1.4 ]}
    />,
  document.getElementById('chart')
);

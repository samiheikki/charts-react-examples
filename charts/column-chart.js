var React = require('react');

module.exports = React.createClass({
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

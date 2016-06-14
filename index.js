require('./bower_components/vaadin-charts/react');
var React = require('react');
var ReactDOM = require('react-dom');

var ColumnChart = require('./charts/column-chart');
var PieChart = require('./charts/pie-chart');
var SplineChart = require('./charts/spline-chart');

var MyApp = React.createClass({
  render: function() {
    return (
      <div>
        <ColumnChart dataRevenue={[ 1.5, 1.8, 1.2, 2.3 ]} dataExpenses={[ 1.2, 1.1, 1.3, 0.9 ]} dataNetIncome={[ -0.3, 0.7, -0.1, 1.4 ]}></ColumnChart>

        <PieChart data={[ ["Aerospace", 45.0], ["Medical", 26.8],["Agriculture ", 12.8], ["Automotive", 8.5],["Consumers", 6.2], ["Subsidies", 0.7] ]}></PieChart>

        <SplineChart dataSupply={[ 35, 28, 45, 60, 80, 74 ]} dataDemand={[ 29, 11, 50, 63, 65, 61 ]}></SplineChart>
      </div>
    )
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('chart')
);

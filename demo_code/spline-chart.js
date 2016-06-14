require('./bower_components/vaadin-charts/react');
var React = require('react');
var ReactDOM = require('react-dom');

var AreaSpline = React.createClass({
  getDefaultProps: function() {
    return {
      dataSupply: [],
      dataDemand: []
    };
  },
  render: function() {
    return (
      <vaadin-areaspline-chart id="area-spline">
        <title>Monthly supply and demand</title>
        <subtitle>Last six months</subtitle>
        <legend is="" layout="vertical" align="left"
            vertical-align="top" x={150} y={100} floating={true}></legend>
        <tooltip is="" shared={true} value-suffix="t"></tooltip>
        <x-axis>
          <categories>January, February, March, April, May, June
          </categories>
        </x-axis>
        <y-axis>
          <title>Metric tons</title>
        </y-axis>
        <data-series name="Supply">
          <data>{this.props.dataSupply.map(JSON.stringify).join(',')}
          </data>
        </data-series>
        <data-series name="Demand">
          <data>{this.props.dataDemand.map(JSON.stringify).join(',')}
          </data>
        </data-series>
      </vaadin-areaspline-chart>
    )
  }
});

ReactDOM.render(
  <AreaSpline
      dataSupply={[ 35, 28, 45, 60, 80, 74 ]}
      dataDemand={[ 29, 11, 50, 63, 65, 61 ]}
    />,
  document.getElementById('chart')
);

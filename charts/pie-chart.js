var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      data: []
    };
  },
  render: function() {
    return (
      <vaadin-pie-chart>
        <title>Revenue by industry</title>
        <subtitle>2015</subtitle>
        <tooltip is="" point-format="<b>{point.percentage:.1f}%</b>">
        </tooltip>
        <plot-options>
          <pie is="" allow-point-select={true} show-in-legend={true} cursor="pointer">
            <data-labels enabled={true} format="{point.name}: {point.y:.1f} M€"></data-labels>
          </pie>
        </plot-options>
      <data-series name="Revenue share">
        <data>{this.props.data.map(JSON.stringify).join(',')}</data>
      </data-series>
    </vaadin-pie-chart>
    )
  }
});

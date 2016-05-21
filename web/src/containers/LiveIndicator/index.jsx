const React = require('react');
import { connect } from 'react-redux';

var LiveIndicator = require('../../components/LiveIndicator');

var LiveIndicatorContainer = React.createClass({
  propTypes: {
    isLive: React.PropTypes.bool.isRequired
  },

  render: function () {
    var isLive = this.props.isLive;

    return (
      <LiveIndicator isLive={ isLive } />
    );
  }
});

var mapStateToProps = function (state) {
  // return { isLive: state.isLive };
  console.log('INDICATOR CONTAINER');
  return { isLive: state.isLive };
  // console.log(state.get('isLive'));
  // return { isLive: state.get('isLive') };
};

module.exports = connect(
  mapStateToProps
)(LiveIndicatorContainer);

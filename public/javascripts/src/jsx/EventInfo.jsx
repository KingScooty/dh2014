var React  = require('react');
var Router = require('react-router');
// import { Router, Route, Link } from 'react-router'

var EventInfo = React.createClass({
  mixins: [ Router.State ],

  // getDefaultProps: function() {
  //   return {
  //     data: [
  //       {
  //         value: {
  //           html: ""
  //         }
  //       }
  //     ]
  //   }
  // },

  getInitialState: function() {
    return {
      data: this.props.data
      // html: this.props.data
    }
  },

  /**
   * Break this out into its own lib file.
   */

  readFromAPI: function(url, successFunction) {

    var Reqwest = require('reqwest');

    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
    console.log('read api called');
  },

  /**
  **/

  componentWillMount: function () {
    // this.readEventInfoFromAPI();
  },

  componentWillReceiveProps: function (nextProps) {
    this.readEventInfoFromAPI();
  },

  componentDidUpdate: function() {
    // this.readEventInfoFromAPI();
  },

  readEventInfoFromAPI: function() {
    var self = this;

    this.readFromAPI(this.getPath() + '/info', function(info) {

      this.setState({
        data: info
      });

    }.bind(this));
  },

  // A utility function to safely escape JSON for embedding in a <script> tag
  safeStringify: function(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
  },

  render: function() {
    //var html = this.state.data; //[0].value.html;

    var json = this.safeStringify(this.props);
    // var json = this.safeStringify(this.props);
    var propStore = <script type="application/json" id="someId" dangerouslySetInnerHTML={{__html: json }}></script>;

    // if (this.state.data) {
      // html = this.props.data[0].value.html;
    // }

    return (
      <div>
        <hr/>
        {propStore}
        <hr/>
        <h1>Hello! Event Info here!</h1>
        <div dangerouslySetInnerHTML={{__html: html }}></div>
      </div>
    );
  }

});

module.exports = EventInfo;

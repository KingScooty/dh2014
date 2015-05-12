/** @jsx React.DOM */

var React         = require('react'); //,
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Status        = require('./Status.jsx');
var ToggleYear    = require('./ToggleYear.jsx');

var Feed = React.createClass({
  mixins: [ Router.State ],

  // Invoked once before the component is mounted.
  // The return value will be used as the initial value of this.state.
  getInitialState: function() {
    return {
      connected: false
      // data: [
      //   {
      //     value: {
      //       tweet_id: '',
      //       id_str: '',
      //       screen_name: '',
      //       timestamp: '',
      //       text: '',
      //       profile_image_url: '',
      //       created_at: '',
      //       media: '',
      //       user: {
      //         screen_name: '',
      //         profile_image_url: ''
      //       },
      //       entities: {
      //         media: []
      //       }
      //     }
      //   }
      // ]
    }
  },

  enableSocketState: function() {
    this.setState({ connected: true });
  },

  // connectToSockets: function() {
  //   console.log('Connect to sockets init!');
  //   var self = this;
  //   // var socket = io('http://localhost/');
  //   var socket = io.connect();
  //
  //   socket.on('connect', function() {
  //     console.log('connected!');
  //     socket.on('news', function(response) {
  //       console.log(response);
  //     });
  //     self.setState({connected: true });
  //   });
  // },

  // routeState: function() {
  //   if (this.getPath() === '/2015/') {
  //     this.setState({ socketFeed: true });
  //   } else {
  //     this.setState({ socketFeed: false });
  //   }
  // },



  componentDidMount: function() {
    // this.readTweetsFromAPI();
    // if (this.getPath() === '/2015') {
    // this.connectToSockets();
    // }
  },

  componentWillUpdate: function() {
    // console.log('component will update');
    // this.readTweetsFromAPI();
  },

  componentWillReceiveProps: function() {
    // force loading render per route change
    this.setState({
      connected: false
    });
  },

  render: function() {

    var path = this.getPath().replace('/', '');

    // if (this.state.data) {
      return (
        <div className="tweet-list">
          <div className="tweet-list__head">
            <Status connected={this.state.connected}/>
            <ToggleYear />
          </div>
          <RouteHandler key={path}
            enableSocketState={this.enableSocketState} />
        </div>
      );
    // } else {
    //   return <div>Loading...</div>;
    // }
  }

});

module.exports = Feed;

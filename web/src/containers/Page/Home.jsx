'use strict';

import React from 'react';

const Logo = require('../../components/Logo');
const EventInfo = require('../../components/EventInfo');

var Home = React.createClass({
  propTypes: {
    Stream: React.PropTypes.node.isRequired
  },

  render: function () {
    var logoProps = {
      title: 'BLACK OPS HEROES',
      eventTag: 'blackops-2016'
    };
    var eventInfoProps = {
      titleLead: 'BLACK OPS HEROES',
      titleSupport: 'DEV\'ING THIS BITCH  UP SINCE 2012',
      body: `Digital heroes does Halloween! The one in the summer was so good, we\'re doing it again, for Halloween! \n\n As per Digital Heroes tradition; a fancy dress night out with all my closest friends &amp; wonderful Web/digital folk of Manchester. (*Fancy dress is a __must__ this time! :P*) - *[see previous years below for ideas.](#twitter-stream)* \n\n The plan is as follows: \n\n ## 18:00, SAT 31ST @ TBD, NQ \n\n Plan is hazy at the moment. Liverpool play Chelsea in the afternoon, so the festivities could potentially start as early as 12:45pm! All i know at the moment is we'll be off to Satan's Hollow in the evening. \n\n ## REALTIME DIARY OF THE EVENT \n\n Leave a tweet with the hashtag *#digitalheroes2015* or *#halloweenheroes2015* and your message (including images) will be pulled in below in realtime. Let's get a diary of the build up, and of the night itself! :-)`,
      footer: 'LIVE TWITTER FEED – #digitalheroes2015 / #halloweenheroes2015'
    };

    var Stream = this.props.Stream;

    return (
      <div>
        <Logo {...logoProps} />
        <EventInfo {...eventInfoProps} />
        { Stream }
      </div>
    );
  }
});

module.exports = Home;

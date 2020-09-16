import React from 'react';
import Navigation from './Navigation';
import DescriptionBox from './DescriptionBox';

class Content {
  constructor(title, subtitle, body) {
    this.title = title;
    this.subtitle = subtitle;
    this.body = body;
  }
}

class Information extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLink: null,
      contentByMenu: {
        About: new Content('About', 'About-sub', 'Body'),
        Portfolio: new Content('Portfolio', 'Portfolio-sub', 'Body'),
        Contact: new Content('Contact', 'Contact-sub', 'Body'),
        Guestbook: new Content('Guestbook', 'Guestbook-sub', 'Body')
      }
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(event) {
    this.setState({ selectedLink: event.target.textContent });
  }

  render() {
    const state = this.state;
    console.log(state.contentByMenu[state.selectedLink]);

    return (
      <main role='main'>
        <Navigation handleStateChange={this.handleStateChange} />
        {state.selectedLink
          ?
          <DescriptionBox
            content={state.contentByMenu[state.selectedLink]}
          />
          : null
        }
      </main>
    )
  }
}

export default Information;
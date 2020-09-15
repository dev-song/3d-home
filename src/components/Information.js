import React from 'react';
import Navigation from './Navigation';
import DescriptionBox from './DescriptionBox';

class Information extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLink: null
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(event) {
    this.setState({ selectedLink: event.target.textContent });
  }

  render() {
    const state = this.state;

    return (
      <main role='main'>
        <Navigation handleStateChange={this.handleStateChange} />
        {state.selectedLink
          ? <DescriptionBox title={this.state.selectedLink} />
          : null
        }
      </main>
    )
  }
}

export default Information;
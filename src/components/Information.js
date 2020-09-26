import React from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/database';

import Navigation from './Navigation';
import DescriptionBox from './DescriptionBox';
import './Information.css';

import ABOUT_INFO from '../data/about';
import PORTFOLIO_ITEMS from '../data/portfolio';
import CONTACT_INFO from '../data/contact';

class Content {
  constructor(title, subtitle, body = '') {
    this.title = title;
    this.subtitle = subtitle;
    this.body = body;
  }
}

class Information extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'ko',
      selectedLink: null,
      isFadingOut: false,
      contentByMenu: {
        About: new Content('About', 'Who Am I', JSON.stringify(ABOUT_INFO)),
        Portfolio: new Content('Portfolio', 'Participated Projects', JSON.stringify(PORTFOLIO_ITEMS)),
        Contact: new Content('Contact', 'How to Contact Me', JSON.stringify(CONTACT_INFO)),
        Guestbook: new Content('Guestbook', 'Leave A Message')
      }
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleLanguageButton = this.handleLanguageButton.bind(this);
  }

  handleStateChange(event) {
    const selectedLink = event.target.textContent;
    const TRANSITION_TIME = 400;  // Should be same as CSS transition time
    const TIME_GAP = 200;         // Time to initiate displaying next DescriptionBox

    if (this.state.selectedLink) {
      if (this.state.selectedLink === selectedLink) return;
      this.setState({ isFadingOut: true });

      setTimeout(() => {
        this.setState({ selectedLink: null, isFadingOut: false });
        this.setState({ selectedLink });
      }, TRANSITION_TIME + TIME_GAP);
    } else {
      this.setState({ selectedLink });
    }
  }

  handleDeleteButton() {
    const TRANSITION_TIME = 400;
    const TIME_GAP = 200;

    this.setState({ isFadingOut: true });

    setTimeout(() => {
      this.setState({ selectedLink: null, isFadingOut: false });
    }, TRANSITION_TIME + TIME_GAP);
  }

  handleLanguageButton() {
    if (this.state.language === 'ko') {
      this.setState({ language: 'en' });
    } else {
      this.setState({ language: 'ko' });
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBK8K7qYrjLgRHUIBafGSENfMhl0FpdeWE",
      authDomain: "home-guestbook.firebaseapp.com",
      databaseURL: "https://home-guestbook.firebaseio.com",
      projectId: "home-guestbook",
      storageBucket: "home-guestbook.appspot.com",
      messagingSenderId: "142799144544",
      appId: "1:142799144544:web:001250f60df6f2b396a505",
      measurementId: "G-67LGRCK27G"
    };
    initializeApp(firebaseConfig);
  }

  render() {
    const state = this.state;

    return (
      <main role='main'>
        <Navigation handleStateChange={this.handleStateChange} />
        {
          state.selectedLink
            ?
            <DescriptionBox
              language={state.language}
              content={state.contentByMenu[state.selectedLink]}
              fadingOut={state.isFadingOut}
              handleDeleteButton={this.handleDeleteButton}
            />
            : null
        }
        <button type='button' className='button__language-change' onClick={this.handleLanguageButton}>
          {state.language === 'ko' ? '한/영' : 'ENG/KOR'}
        </button>
      </main>
    )
  }
}

export default Information;
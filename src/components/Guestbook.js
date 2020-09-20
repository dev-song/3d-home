/***  reference to Firebase database usage
 *  Dynamic Web Apps on GitHub Pages (https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45)
 * Firebase for Web: Firebase Realtime Database (https://medium.com/codingurukul/firebase-for-web-firebase-realtime-database-9280a52ced83)
 */

import React from 'react';
import { database } from 'firebase/app';
import 'firebase/database';

const TARGET_DB = 'guestbook';

class Guestbook extends React.Component {
  constructor() {
    super();
    this.state = {
      guestbook: null
    }

    this.loadGuestbookData = this.loadGuestbookData.bind(this);
    this.postGuestbookData = this.postGuestbookData.bind(this);
    this.handleGuestbookSubmit = this.handleGuestbookSubmit.bind(this);
  }

  loadGuestbookData(category) {
    database().ref(category).on('value', (snapshot) => {
      if (snapshot.val().length < 1) {
        console.log(`There's no guestbook data.`);
        return;
      }

      const guestbook = [];
      snapshot.forEach(childSnapshot => {
        const guestbookItem = {
          key: childSnapshot.key,
          data: childSnapshot.val()
        }
        guestbook.push(guestbookItem);
      });
      guestbook.sort((a, b) => b.data.regTime - a.data.regTime);

      this.setState({ guestbook: guestbook });
    });
  }

  postGuestbookData(data, category) {
    database().ref(category).push(data)
      .then(
        function (snapshot) {   // executed on success
          console.log(`Data is successfully written`);
        }, function (error) {   // executed on error
          console.error(`Error: ${error}`);
        }
      );
  }

  handleGuestbookSubmit(event) {
    event.preventDefault();

    const guestbookData = {
      regTime: new Date().getTime(),
      name: event.target.querySelector('#name').value,
      password: event.target.querySelector('#password').value,
      message: event.target.querySelector('#message').value
    }

    this.postGuestbookData(guestbookData, TARGET_DB);
  }

  componentDidMount() {
    this.loadGuestbookData(TARGET_DB);
  }

  render() {
    const state = this.state;

    return (
      <div className='guestbook'>
        <form className='guestbook-form' onSubmit={this.handleGuestbookSubmit}>
          <input className='guestbook-form__name' id='name' type='text' placeholder='Name' />
          <input className='guestbook-form__password' id='password' type='password' placeholder='Password' />
          <input className='guestbook-form__message' id='message' type='text' placeholder='Message' />
          <input className='guestbook-form__submit' type='submit' value='Register' />
        </form>
        <div className='guestbook-list'>
          {
            state.guestbook
              ?
              state.guestbook.map((guestbookItem, itemIndex) => {
                const { name, password, message, regTime } = guestbookItem.data;
                const date = new Date(regTime);
                const dateStr = `
                  ${date.getFullYear()}/${date.getMonth()}/${date.getDate()} 
                  ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                `;

                return (
                  <div className='guestbook-item' key={itemIndex} data-key={guestbookItem.key}>
                    <h4 className='guestbook-item__user'>{name}</h4>
                    <p className='guestbook-item__message'>{message}</p>
                    <p className='guestbook-item__registration-time'>{dateStr}</p>
                  </div>
                )
              })
              : null
          }
        </div>
      </div>
    )
  }
}

export default Guestbook;
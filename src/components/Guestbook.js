/***  reference to Firebase database usage
 *  Dynamic Web Apps on GitHub Pages (https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45)
 * Firebase for Web: Firebase Realtime Database (https://medium.com/codingurukul/firebase-for-web-firebase-realtime-database-9280a52ced83)
 */

import React from 'react';
import { database } from 'firebase/app';
import 'firebase/database';
import './Guestbook.css';

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

    if (!this.validateSubmit(guestbookData)) {
      alert('You have to enter the form with the proper length of characters');
      return;
    }

    event.target.querySelector('#name').value = '';
    event.target.querySelector('#password').value = '';
    event.target.querySelector('#message').value = '';

    this.postGuestbookData(guestbookData, TARGET_DB);
  }

  validateSubmit({ name, password, message }) {
    const isNameLengthProper = name.length <= 12 && name.length >= 1;
    const isPasswordLengthProper = password.length === 4;
    const isMessageLengthProper = message.length <= 200 && message.length >= 1;

    if (!isNameLengthProper || !isPasswordLengthProper || !isMessageLengthProper) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.loadGuestbookData(TARGET_DB);
  }

  render() {
    const state = this.state;

    return (
      <div className='guestbook'>
        <form className='guestbook-form' onSubmit={this.handleGuestbookSubmit}>
          <input className='guestbook-form__name' id='name' type='text' placeholder='Name (12 characters max)' minLength='1' maxLength='12' />
          <input className='guestbook-form__password' id='password' type='password' minLength='4' maxLength='4' placeholder='Password (4 characters)' />
          <input className='guestbook-form__message' id='message' type='text' placeholder='Message (200 characters max)' minLength='1' maxLength='200' />
          <button className='guestbook-form__submit'>Register</button>
        </form>
        <div className='guestbook-list'>
          {
            state.guestbook
              ?
              state.guestbook.map((guestbookItem, itemIndex) => {
                const { name, password, message, regTime } = guestbookItem.data;
                const date = new Date(regTime);
                const dateStr = `
                  ${`${date.getFullYear()}`.substring(2)}
                  /${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}
                  /${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                `;
                const timeStr = `
                  ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                  :${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                `;

                return (
                  <div className='guestbook-item' key={itemIndex} data-key={guestbookItem.key}>
                    <p className='guestbook-item__message'>{message}</p>
                    <p className='guestbook-item__registration-info'>
                      <span className='registration-info__user'>{name}</span>
                      <span className='registration-info__time'>{timeStr}</span>
                      <span className='registration-info__date'>{dateStr}</span>
                    </p>
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
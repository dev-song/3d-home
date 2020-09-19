/***  reference to Firebase database usage
 *  Dynamic Web Apps on GitHub Pages (https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45)
 * Firebase for Web: Firebase Realtime Database (https://medium.com/codingurukul/firebase-for-web-firebase-realtime-database-9280a52ced83)
 */

import React from 'react';
import { initializeApp, database } from 'firebase/app';
import 'firebase/database';

function readFirebaseData(category) {
  database().ref(category).on('value', (snapshot) => {
    console.log(snapshot.val());
  });
}

function saveToFirebase(data, category) {
  database().ref(category).push(data)
    .then(
      function (snapshot) {   // executed on success
        console.log(`Data is successfully written`);
      }, function (error) {   // executed on error
        console.error(`Error: ${error}`);
      }
    );
}

function handleGuestbookSubmit(event) {
  event.preventDefault();

  const guestbookData = {
    regTime: new Date().getTime(),
    name: event.target.querySelector('#name').value,
    password: event.target.querySelector('#password').value,
    message: event.target.querySelector('#message').value
  }

  saveToFirebase(guestbookData, 'guestbook');
}

class Guestbook extends React.Component {
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
    return (
      <div className='guestbook'>
        <form className='guestbook-form' onSubmit={handleGuestbookSubmit}>
          <input className='guestbook-form__name' id='name' type='text' placeholder='Name' />
          <input className='guestbook-form__password' id='password' type='password' placeholder='Password' />
          <input className='guestbook-form__message' id='message' type='text' placeholder='Message' />
          <input className='guestbook-form__submit' type='submit' value='Register' />
        </form>
        <div className='guestbook-list'>

        </div>
      </div>
    )
  }
}

export default Guestbook;
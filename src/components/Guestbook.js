import React from 'react';

function Guestbook() {
  return (
    <div className='guestbook'>
      <form className='guestbook-form' action='' method='post'>
        <input className='guestbook-form__name' type='text' placeholder='Name' />
        <input className='guestbook-form__password' type='password' placeholder='Password' />
        <input className='guestbook-form__message' type='text' placeholder='Message' />
        <input className='guestbook-form__submit' type='submit' value='Register' />
      </form>
      <div className='guestbook-list'>

      </div>
    </div>
  )
}

export default Guestbook;
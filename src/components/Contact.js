import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import './Contact.css';

function Contact({ contactInfo }) {
  const { homepage, email, github, blogName, blogUrl } = JSON.parse(contactInfo);

  return (
    <div className='contact-info'>
      <h4 className='contact-info__homepage--label'>Homepage</h4>
      <p className='contact-info__homepage'>{homepage}</p>
      <h4 className='contact-info__email--label'>E-mail</h4>
      <p className='contact-info__email'>{email}</p>
      <a className='contact-info__github' href={github}><FaGithubAlt /></a>
      <a className='contact-info__blog' href={blogUrl}>{blogName} (Blog)</a>
    </div>
  )
}

export default Contact;
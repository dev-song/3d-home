import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import './Contact.css';

function Contact({ contactInfo }) {
  const { email, github, blogName, blogUrl } = JSON.parse(contactInfo);

  return (
    <div className='contact-info'>
      <h4 className='contact-info__email--label'>E-mail</h4>
      <p className='contact-info__email'>{email}</p>
      <h4 className='contact-info__blog--label'>Blog</h4>
      <p className='contact-info__blog'>
        <a href={blogUrl}>{blogName}</a>
      </p>
      <h4 className='contact-info__github--label'>Github</h4>
      <p className='contact-info__github'>
        <a href={github}><FaGithubAlt /></a>
      </p>
    </div>
  )
}

export default Contact;
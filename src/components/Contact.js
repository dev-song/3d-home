import React from 'react';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact({ contactInfo }) {
  const { email, github, blogName, blogUrl, linkedIn } = contactInfo;

  return (
    <div className='contact-info'>
      <h4 className='contact-info__email--label'>E-mail</h4>
      <p className='contact-info__email'>{email}</p>
      <h4 className='contact-info__blog--label'>Blog</h4>
      <p className='contact-info__blog'>
        <a href={blogUrl} target='_blank' rel='noopener noreferrer'>
          {blogName}
        </a>
      </p>
      <h4 className='contact-info__github--label'>Github</h4>
      <p className='contact-info__github'>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <FaGithubAlt />
        </a>
      </p>
      <h4 className='contact-info__linkedin--label'>LinkedIn</h4>
      <p className='contact-info__linkedin'>
        <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
      </p>
    </div>
  );
}

export default Contact;

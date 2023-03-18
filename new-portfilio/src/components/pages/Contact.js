import React, { useState } from 'react';
import '../../styles/FormStyle.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleLoseFocusName = (e) => {
    if (!name) {
      setErrorMessage(`A name is required`);
      return;
    }
  }

  const handleLoseFocusEmail = (e) => {
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
  }
  const handleLoseFocusMessage = (e) => {
    if (!message) {
      setErrorMessage(`A message is required`);
      return;
    }
  }


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    if (!message) {
      setErrorMessage(`A message is required`);
      return;
    }
    alert(`Thank you for contacting me, ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <div className='contact-form'>
        <form className="form">
          <input
            className='name-input'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            onBlur={handleLoseFocusName}
          />
          <input
            className='email-input'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            onBlur={handleLoseFocusEmail}
          />
          <input
            className='message-input'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
            onBlur={handleLoseFocusMessage}
          />
          <button className='submit-btn' type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
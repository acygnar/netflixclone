import React, { useRef } from 'react';
import { StyledForm } from './Newsletter.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
export default function Newsletter() {
  const email = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="email" placeholder="Email address" ref={email} />
      <button>
        Get Started <ArrowIcon />
      </button>
    </StyledForm>
  );
}

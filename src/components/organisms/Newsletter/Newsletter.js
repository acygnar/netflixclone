import React, { useRef } from 'react';
import { StyledForm } from './Newsletter.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { useSelector } from 'react-redux';
export default function Newsletter() {
  const email = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
  const { data } = useSelector((state) => state.apiData);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="email" placeholder={data.allNewsletters[0].placeholder} ref={email} />
      <button>
        {data.allNewsletters[0].buttonLabel} <ArrowIcon />
      </button>
    </StyledForm>
  );
}

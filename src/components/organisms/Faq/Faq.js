import React from 'react';

import { DividerBottom } from 'components/molecules/Section/Section.styles';
import { FaqWrapper, FaqList, FaqItem } from './Faq.styles';
import { Title } from 'components/atoms/Title/Title';

const faqs = [
  {
    q: 'title',
    a: 'answer',
  },
  {
    q: 'title2',
    a: 'answer2',
  },
];

export default function Faq() {
  const handleClick = (e) => {
    let question = e.target.nextSibling;
    let current = e.target;
    current.classList.toggle('active');
    question.classList.toggle('active');
  };

  return (
    <FaqWrapper>
      <Title center={true} as="h2">
        Frequently Asked Questions
      </Title>

      <FaqList>
        {faqs.map((faq) => (
          <FaqItem key={faq.q}>
            <h3 onClick={handleClick}>{faq.q}</h3>
            <div>{faq.a}</div>
          </FaqItem>
        ))}
      </FaqList>
      <DividerBottom />
    </FaqWrapper>
  );
}

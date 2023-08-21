import React from 'react';

import { DividerBottom } from 'components/molecules/Section/Section.styles';
import { FaqWrapper, FaqList, FaqItem } from './Faq.styles';
import { Title } from 'components/atoms/Title/Title';
import { ReactComponent as Cross } from 'assets/svgs/cross.svg';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Newsletter from '../Newsletter/Newsletter';

export default function Faq({ faqs }) {
  const handleClick = (e) => {
    let question = e.target.nextSibling;
    let current = e.target;
    current.classList.toggle('active');
    question.classList.toggle('active');
  };

  return (
    <FaqWrapper>
      <Title center={true} as="h2">
        Często zadawane pytania
      </Title>

      <FaqList>
        {faqs.map((faq) => (
          <FaqItem key={faq.id}>
            <h3 onClick={handleClick}>
              {faq.question} <Cross />
            </h3>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </FaqItem>
        ))}
      </FaqList>
      <Paragraph center>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Paragraph>
      <Newsletter />
      <DividerBottom />
    </FaqWrapper>
  );
}

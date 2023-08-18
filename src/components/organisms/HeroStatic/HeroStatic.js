import React from 'react';

import { Wrapper, Content, Shadow } from './HeroStatic.styles';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Newsletter from 'components/organisms/Newsletter/Newsletter';
import { DividerBottom } from 'components/molecules/Section/Section.styles';

export default function HeroStatic() {
  return (
    <Wrapper>
      <Shadow>
        <Content>
          <Title center="true" bold="true">
            Unlimited movies, TV shows and more.
          </Title>
          <Paragraph center="true" big="true">
            Watch anywhere.Cancel anytime.
          </Paragraph>
          <Paragraph center="true">Ready to watch?Enter your email to create or restart your membership</Paragraph>
        </Content>
        <Newsletter />
      </Shadow>
      <DividerBottom />
    </Wrapper>
  );
}

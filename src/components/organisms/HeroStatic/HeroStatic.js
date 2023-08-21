import React from 'react';

import { Wrapper, Content, Shadow } from './HeroStatic.styles';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Newsletter from 'components/organisms/Newsletter/Newsletter';
import { DividerBottom } from 'components/molecules/Section/Section.styles';

export default function HeroStatic({ title, first, second }) {
  return (
    <Wrapper>
      <Shadow>
        <Content>
          <Title center="true" bold="true">
            {title}
          </Title>
          <Paragraph center="true" big="true">
            {first}
          </Paragraph>
          <Paragraph center="true">{second}</Paragraph>
        </Content>
        <Newsletter />
      </Shadow>
      <DividerBottom />
    </Wrapper>
  );
}

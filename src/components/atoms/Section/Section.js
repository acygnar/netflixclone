import React from 'react';
import { Wrapper, Container, DividerBottom, VideoWrapper, Video } from './Section.styles';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';
export default function Section({ children, title, content, video, img }) {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title as="h2">{title}</Title>
          <Paragraph>{content}</Paragraph>
        </div>
        <VideoWrapper>
          <img src={img} alt="" />
          <Video>
            <video loop muted autoPlay={true}>
              <source src={video} />
            </video>
          </Video>
        </VideoWrapper>
        {children}
      </Container>
      <DividerBottom />
    </Wrapper>
  );
}

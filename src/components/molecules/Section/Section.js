import React from 'react';
import { Wrapper, Container, DividerBottom, VideoWrapper, Video, ContentWrapper, ImageWrapper } from './Section.styles';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import Download from 'components/molecules/Download/Download';
export default function Section({ children, title, content, video, videoimg, apple, image, download }) {
  return (
    <Wrapper>
      <Container>
        {image && (
          <ImageWrapper>
            <img src={image} alt="" />
            {download && <Download />}
          </ImageWrapper>
        )}
        <ContentWrapper>
          <Title as="h2">{title}</Title>
          <Paragraph>{content}</Paragraph>
        </ContentWrapper>
        {video && (
          <VideoWrapper>
            <img src={videoimg} alt="" />
            <Video apple={apple}>
              <video loop muted autoPlay={true}>
                <source src={video} />
              </video>
            </Video>
          </VideoWrapper>
        )}
        {children}
      </Container>
      <DividerBottom />
    </Wrapper>
  );
}

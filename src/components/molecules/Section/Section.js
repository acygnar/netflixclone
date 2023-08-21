import React from 'react';
import { Wrapper, DividerBottom, VideoWrapper, Video, ContentWrapper, ImageWrapper } from './Section.styles';
import { Container } from 'components/atoms/Container/Container';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import Download from 'components/molecules/Download/Download';
export default function Section({ children, title, content, video, videoimg, apple, image, download }) {
  return (
    <Wrapper>
      <Container>
        {image && (
          <ImageWrapper>
            <img src={image.url} alt={image.alt} />
            {download && <Download />}
          </ImageWrapper>
        )}
        <ContentWrapper>
          <Title as="h2">{title}</Title>
          <Paragraph dangerouslySetInnerHTML={{ __html: content }}></Paragraph>
        </ContentWrapper>
        {video && (
          <VideoWrapper>
            <img src={videoimg.url} alt={videoimg.alt} />
            <Video apple={apple}>
              <video loop muted autoPlay={true}>
                <source src={video.url} />
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

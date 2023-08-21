import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroStatic from 'components/organisms/HeroStatic/HeroStatic';
import Section from 'components/molecules/Section/Section';
import Faq from 'components/organisms/Faq/Faq';
import { Wrapper } from './Start.styles.js';

import { Paragraph } from 'components/atoms/Paragraph/Paragraph.js';

export const query = `
{
  allFaqs {
    id
    question
    answer
  } 

  startPage {
    heroTitle
    heroFirstLine
    heroSecondLine
    sections {
      id
      changeTheVideoFit
      image {
        alt
        url
      }
      showDownloadBaner
      text
      title
      video {
        url
      }
      videoMedium {
        alt
        url
      }
    }
  }
}
`;

export default function Start() {
  const [faqs, setFaqs] = useState(null);
  const [startPage, setStartPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setFaqs(data.allFaqs);
        setStartPage(data.startPage);
        console.log(data.startPage);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load faqs for you`);
      });
  }, []);

  return (
    <Wrapper>
      {startPage && <HeroStatic title={startPage.heroTitle} first={startPage.heroFirstLine} second={startPage.heroSecondLine} />}
      {/* <Section
        title="Enjoy on your TV."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus."
        videoimg={tv}
        video={video1}
      />

      <Section
        title="Download your shows to watch offline."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        image={mobile}
        download={true}
      />

      <Section
        apple={true}
        title="Watch everywhere."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        videoimg={appleDevice}
        video={video2}
      />

      <Section
        title="Create profile for children."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
        image={children} */}
      {/* /> */}
      {startPage &&
        startPage.sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            content={section.text}
            videoimg={section.videoMedium}
            image={section.image}
            video={section.video}
            apple={section.changeTheVideoFit}
            download={section.showDownloadBaner}
          />
        ))}
      {faqs && <Faq faqs={faqs} />}
      {!faqs && <Paragraph>{error}</Paragraph>}
    </Wrapper>
  );
}

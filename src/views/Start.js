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
    textAfterFaq
  }
}
`;

export default function Start() {
  const [faqs, setFaqs] = useState(null);
  const [startPage, setStartPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      })
      .catch(() => {
        setError(`Przepraszamy, nie mogliśmy załadować faqs dla Ciebie.`);
      });
  }, []);

  return (
    <Wrapper>
      {startPage && <HeroStatic title={startPage.heroTitle} first={startPage.heroFirstLine} second={startPage.heroSecondLine} />}
      {startPage &&
        startPage.sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            content={section.text}
            videoimg={section.videoMedium}
            image={section.image}
            video={section.video}
            apple={section.changeTheVideoFit ? 1 : 0}
            download={section.showDownloadBaner}
          />
        ))}
      {faqs && <Faq after={startPage.textAfterFaq} faqs={faqs} />}
      {!faqs && <Paragraph>{error}</Paragraph>}
    </Wrapper>
  );
}

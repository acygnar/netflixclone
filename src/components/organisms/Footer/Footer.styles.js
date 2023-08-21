import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
export const FooterWrapper = styled.div`
  padding: 1.25rem 0;
  width: 100%;
  @media screen and (min-width: 960px) {
    padding: 3.75rem 0;
  }
`;
export const FooterNav = styled.nav`
  width: 100%;
`;
export const FooterNavList = styled.ul`
  box-sizing: border-box;
  display: grid;
  grid-gap: 0.75rem;
  width: 100%;
  grid-template-columns: repeat(3, minmax(calc(100% / 3), 1fr));
  margin-bottom: 0;
  list-style-type: none;
  line-height: 1.3125rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  li {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.9px;
    text-align: left;
    a {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: underline;
    }
  }
`;

export const CallInfo = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.7);
`;

export const Sign = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
`;

import React from 'react';
import { FooterWrapper, FooterNavList, FooterNav, CallInfo, Sign } from './Footer.styles';
import { Container } from 'components/atoms/Container/Container';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  const FooterNavLinks = [
    {
      label: 'FAQ',
      url: '/faq',
    },
    {
      label: 'Investor Relations',
      url: '/faq2',
    },
    {
      label: 'Privacy',
      url: '/faq3',
    },
    {
      label: 'Speed Test',
      url: '/faq4',
    },
    {
      label: 'Help Centre',
      url: '/faq5',
    },
    {
      label: 'Jobs',
      url: '/faq6',
    },
    {
      label: 'Cookie Preferences',
      url: '/faq7',
    },
    {
      label: 'Legal Notices',
      url: '/faq8',
    },
    {
      label: 'Account',
      url: '/faq9',
    },
    {
      label: 'Ways to Watch',
      url: '/faq10',
    },
    {
      label: 'Corprate Information',
      url: '/faq11',
    },
    {
      label: 'Only on Netflix',
      url: '/faq12',
    },
    {
      label: 'Media Centre',
      url: '/faq13',
    },
    {
      label: 'Terms of Use',
      url: '/faq14',
    },
    {
      label: 'Contact Us',
      url: '/faq15',
    },
  ];

  return (
    <Container>
      <FooterWrapper>
        <CallInfo>Questions? Call 000-800-1843</CallInfo>
        <FooterNav>
          <FooterNavList>
            {FooterNavLinks.map((link) => (
              <li key={link.url}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </li>
            ))}
          </FooterNavList>
        </FooterNav>
        <Sign>Netflix Polska</Sign>
      </FooterWrapper>
    </Container>
  );
}

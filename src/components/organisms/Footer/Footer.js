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
      url: '/faq',
    },
    {
      label: 'Privacy',
      url: '/faq',
    },
    {
      label: 'Speed Test',
      url: '/faq',
    },
    {
      label: 'Help Centre',
      url: '/faq',
    },
    {
      label: 'Jobs',
      url: '/faq',
    },
    {
      label: 'Cookie Preferences',
      url: '/faq',
    },
    {
      label: 'Legal Notices',
      url: '/faq',
    },
    {
      label: 'Account',
      url: '/faq',
    },
    {
      label: 'Ways to Watch',
      url: '/faq',
    },
    {
      label: 'Corprate Information',
      url: '/faq',
    },
    {
      label: 'Only on Netflix',
      url: '/faq',
    },
    {
      label: 'Media Centre',
      url: '/faq',
    },
    {
      label: 'Terms of Use',
      url: '/faq',
    },
    {
      label: 'Contact Us',
      url: '/faq',
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

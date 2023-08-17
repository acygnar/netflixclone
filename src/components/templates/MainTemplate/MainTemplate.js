import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
// import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
// import NewsSection from 'components/templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      {/* <SearchBar /> */}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;

import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';
import { StyledSearchButton } from 'components/atoms/SearchButton/SearchButton.styles';

const SearchButton = () => (
  <StyledSearchButton>
    <SearchIcon />
  </StyledSearchButton>
);

export default SearchButton;

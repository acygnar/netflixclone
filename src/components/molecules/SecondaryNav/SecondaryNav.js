import React from 'react';
import LogoutButton from 'components/atoms/LogoutButton/LogoutButton';
import SearchButton from 'components/atoms/SearchButton/SearchButton';
import Notification from 'components/atoms/Notification/Notification';

export default function SecondaryNav() {
  return (
    <div>
      <SearchButton />
      <Notification />
      <LogoutButton />
    </div>
  );
}

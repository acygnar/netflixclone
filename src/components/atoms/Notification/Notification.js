import React from 'react';
import { ReactComponent as NotificationIcon } from 'assets/icons/notification.svg';
import { StyledNotificationButton } from 'components/atoms/Notification/Notification.styles';

const Notification = () => (
  <StyledNotificationButton>
    <NotificationIcon />
  </StyledNotificationButton>
);

export default Notification;

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import { AuthenticationGuard } from 'components/molecules/AuthenticationGuard/AuthenticationGuard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Start from 'views/Start';
import Dashboard from 'views/Dashboard';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

import { useAuth0 } from '@auth0/auth0-react';

import { useDispatch } from 'react-redux';
import { fetchApiData } from 'store/apiDataThunks';

function Root() {
  const { isLoading } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route path="/browse" element={<AuthenticationGuard component={Dashboard} />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;

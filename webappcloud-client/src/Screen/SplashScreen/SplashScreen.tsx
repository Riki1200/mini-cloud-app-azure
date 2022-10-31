import { useState, useEffect } from 'react';
import { Container } from '@nextui-org/react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

export default function SplashScreen() {
  const location = useLocation();
  const navigationData = useNavigation();
  const navigationUp = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigationUp('/home', { preventScrollReset: true, replace: true });
    }
  }, [location.pathname, navigationUp]);

  return (
    <>
      <Container fluid></Container>
    </>
  );
}

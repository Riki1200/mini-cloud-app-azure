import { useState, useEffect, useTransition } from 'react';
import { Container, Text, Card, Row, Col } from '@nextui-org/react';
import Lottie, { LottileAnimationControl } from 'lottie-react-web';
import riskcloudAnimation from '../../Assets/isometrict.loader.json';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const TIME_LIMIT = 7000;

export default function SplashScreen() {
  const location = useLocation();
  const navigationUp = useNavigate();
  const [trasition, lookUpFunction] = useTransition();
  const [navigate, setNavigate] = useState(false);
  useEffect(() => {
    if (location.pathname === '/') {
      if (navigate) {
        navigationUp('/home', { preventScrollReset: true, replace: true });
      }
    }

    lookUpFunction(() => {
      setTimeout(() => {
        setNavigate(true);
      }, TIME_LIMIT);
    });
  }, [location, navigationUp, trasition, navigate]);

  return (
    <Container fluid responsive>
      <Col>
        <Lottie
          width={'40rem'}
          options={{
            animationData: riskcloudAnimation,
            autoplay: true,
          }}
        />
        <Row justify="center">
          <Text h2>RISK-CLOUD</Text>
        </Row>
      </Col>
    </Container>
  );
}

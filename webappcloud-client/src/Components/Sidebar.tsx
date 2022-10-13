import { ReactChildren } from 'react';
import { Button, Card, Col } from '@nextui-org/react';

type SiderbarProps = {
  styles: {
    icon?: React.ReactElement;
    components: ReactChildren[];
  };
};

const Sidebar = ({ ...styles }: SiderbarProps) => {
  return (
    <>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Col>
            <Button>My Cloud</Button>
            <Button>My Cloud</Button>
            <Button>My Cloud</Button>
            <Button>My Cloud</Button>
            <Button>My Cloud</Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

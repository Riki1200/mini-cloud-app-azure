import React from 'react';
import './index.scss';
import { Avatar, Container, Grid } from '@nextui-org/react';

function App() {
  const nameUsers = ['Junior', 'Jane', 'W', 'John', 'JR'];
  const pictureUsers = [
    'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a04258114e29026702d',
    'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  ];
  return (
    <Container className="App">
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Avatar.Group count={12}>
            {nameUsers.map((name, index) => (
              <Avatar key={index} size="lg" pointer text={name} stacked />
            ))}
          </Avatar.Group>
        </Grid>
        <Grid xs={12}>
          <Avatar.Group count={12}>
            {pictureUsers.map((url, index) => (
              <Avatar key={index} size="lg" pointer src={url} bordered color="gradient" stacked />
            ))}
          </Avatar.Group>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default App;

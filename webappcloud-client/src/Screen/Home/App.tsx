import React from 'react';
import { Avatar, Container, Grid } from '@nextui-org/react';
import Sidebar from '../../Components/Sidebar';

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
    <Container fluid className="App">
      <Sidebar />
    </Container>
  );
}

export default App;

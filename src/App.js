import Container from './components/container.Head.js';
import Title from './components/title';
import CardGuestLoves from './components/card/hotels';

function App() {
  return (
    
      <Container>
        <Title text = 'Homes guests loves'/>
        <CardGuestLoves/>
      </Container>
   
  );
}

export default App;

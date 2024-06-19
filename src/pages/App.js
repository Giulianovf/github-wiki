import gitlogo from '../assets/githublogo.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';


import { Container } from "./styles";


function App() {
  return (
    <Container>
      <img src={gitlogo} alt='logo' width={72} height={72} />
      <Input />
      < ItemRepo />      
    </Container>
  );
}

export default App;
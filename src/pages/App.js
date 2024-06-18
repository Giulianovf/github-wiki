import gitlogo from '../assets/githublogo.png'
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <img src={gitlogo} alt='logo' width={72} height={72} />
      olá
    </Container>
  );
}

export default App;

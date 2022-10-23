import Container from "./components/UI/Container";
import Title from "./components/UI/Title";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Title />
      <Outlet />
    </Container>
  );
}

export default App;

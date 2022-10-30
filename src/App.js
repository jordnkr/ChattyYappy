import Container from "./components/UI/Container";
import Title from "./components/UI/Title";
import { Outlet } from "react-router-dom";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <Container>
        <Title />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;

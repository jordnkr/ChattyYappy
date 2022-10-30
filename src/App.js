import Title from "./components/UI/Title";
import { Outlet } from "react-router-dom";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <Title />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

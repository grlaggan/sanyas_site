import "../styles/global.css";
import Header from "../components/Header/Header";
import LeftAside from "../components/LeftAside/LeftAside";
import Main from "../components/Main/Main";
import RightAside from "../components/RightAside/RightAside";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Афанасьева Евгения Викторовна";
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <LeftAside />
        <Main />
        <RightAside />
      </div>
    </>
  );
}

export default App;

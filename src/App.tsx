import "../styles/global.css";
import Header from "../components/Header/Header";
import LeftAside from "../components/LeftAside/LeftAside";
import Main from "../components/Main/Main";
import RightAside from "../components/RightAside/RightAside";

function App() {
  return (
    <div className="container">
      <Header />
      <LeftAside />
      <Main />
      <RightAside />
    </div>
  );
}

export default App;

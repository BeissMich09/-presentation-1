import "./App.css";
import SecondPage from "./Component/SecondPage/SecondPage";
import ThirdPageContainer from "./Component/ThirdPage/ThirdPageContainer";
import TitlePage from "./Component/TitlePage/TitlePage";

function App() {
  return (
    <div className="App">
      <TitlePage />
      <SecondPage />
      <ThirdPageContainer />
    </div>
  );
}

export default App;

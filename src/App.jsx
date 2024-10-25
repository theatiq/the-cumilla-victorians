import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import Selects from "./components/Selects";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Buttons></Buttons>
      <Players></Players>
      <Selects></Selects>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
}

export default App;

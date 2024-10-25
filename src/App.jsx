import { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import Selects from "./components/Selects";
import Subscription from "./components/Subscription";

function App() {
  const [coin, setCoin] = useState(0);
  const [selected, setSelected] = useState([]);
  const totalCoin = () => {
    const newCoin = coin + 1000000;
    setCoin(newCoin);
    console.log(coin);
  };

  const handleSelected = (player) => {
    const isExist = selected.find((p) => p.player_id === player.player_id);
    if (isExist) {
      alert("Already Selected");
    } else {
      const newlySelected = [...selected, player];
      setSelected(newlySelected);
    }
  };
  return (
    <div>
      <Header coin={coin}></Header>
      <Banner totalCoin={totalCoin}></Banner>
      <Buttons></Buttons>
      <Players handleSelected={handleSelected}></Players>
      <Selects selected={selected}></Selects>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
}

export default App;

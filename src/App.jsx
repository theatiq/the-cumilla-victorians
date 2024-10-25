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
  const [current, setCurrent] = useState(true);
  const [selected, setSelected] = useState([]);

  const handleCurrent = (status) => {
    if (status === "available") {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
  };

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
      if (coin >= player.price) {
        const remainingCoin = coin - player.price;
        setCoin(remainingCoin);
      } else {
        return alert("Please Credit Coin");
      }

      if (selected.length > 5) {
        alert("You have already selected maximum number of players");
      } else {
        return setSelected(newlySelected);
      }
    }
  };

  const handleDelete = (player) => {
    const remainingPlayer = selected.filter(
      (p) => p.player_id !== player.player_id
    );
    setSelected(remainingPlayer);
  };
  return (
    <div>
      <Header coin={coin}></Header>
      <Banner totalCoin={totalCoin}></Banner>
      <Buttons handleCurrent={handleCurrent}></Buttons>
      {current ? (
        <Players handleSelected={handleSelected}></Players>
      ) : (
        <Selects selected={selected} handleDelete={handleDelete}></Selects>
      )}
      {/* <Players handleSelected={handleSelected}></Players>
      <Selects selected={selected} handleDelete={handleDelete}></Selects> */}
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
}

export default App;

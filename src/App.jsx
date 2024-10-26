import { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import Selects from "./components/Selects";
import Subscription from "./components/Subscription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coin, setCoin] = useState(0);
  const [current, setCurrent] = useState(true);
  const [selected, setSelected] = useState([]);

  const notify = () => toast.success("1000000 Free Coins Added !");
  const warning = () => toast.error("Not enough coin, please add.");
  const congrats = () => toast.success("Congrats! Player added.");
  const alreadyAdded = () => toast.error("This Player already added.");

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
    notify();
  };

  const handleSelected = (player) => {
    const isExist = selected.find((p) => p.player_id === player.player_id);
    if (isExist) {
      return alreadyAdded();
    } else {
      const newlySelected = [...selected, player];

      if (coin >= player.price) {
        const remainingCoin = coin - player.price;
        setCoin(remainingCoin);
        congrats();
      } else {
        return warning();
      }

      if (selected.length > 5) {
        alert("You have already selected maximum number of players");
      } else {
        return setSelected(newlySelected);
      }
    }
    congrats();
  };

  const handleDelete = (player) => {
    const remainingPlayer = selected.filter(
      (p) => p.player_id !== player.player_id
    );
    setSelected(remainingPlayer);
    const newBalance = coin + player.price;
    setCoin(newBalance);
  };
  return (
    <div>
      <ToastContainer />
      <Header coin={coin}></Header>
      <Banner totalCoin={totalCoin}></Banner>
      <Buttons handleCurrent={handleCurrent} selected={selected}></Buttons>
      {current ? (
        <Players handleSelected={handleSelected}></Players>
      ) : (
        <Selects
          selected={selected}
          handleDelete={handleDelete}
          handleCurrent={handleCurrent}
        ></Selects>
      )}
      {/* <Players handleSelected={handleSelected}></Players>
      <Selects selected={selected} handleDelete={handleDelete}></Selects> */}
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
}

export default App;

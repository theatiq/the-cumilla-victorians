import logo from "../assets/logo.png";
import { AiOutlineDollar } from "react-icons/ai";
const Header = ({ coin }) => {
  return (
    <div className="mx-auto sticky top-0 bg-pink-100 z-50 opacity-80 mb-10">
      <div className="lg:flex items-center px-10 place-items-center">
        <div className="flex-1 pt-2 pb-2">
          <img src={logo} alt="" />
        </div>
        <div className="space-x-5 lg:flex gap-5 items-center text-xl pt-2">
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedules</a>
          <div className="flex gap-2 items-center border rounded-lg px-5 bg-pink-200 p-2">
            <span className="font-bold">{coin}</span>
            <button>Coin</button>
            <AiOutlineDollar className="text-pink-600 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

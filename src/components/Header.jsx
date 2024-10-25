import logo from "../assets/logo.png";
import { AiOutlineDollar } from "react-icons/ai";
const Header = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar flex items-center mb-5">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-5 items-center text-xl">
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedules</a>
          <div className="flex gap-2 items-center">
            <span>0</span>
            <button>Coin</button>
            <AiOutlineDollar className="text-orange-600 text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

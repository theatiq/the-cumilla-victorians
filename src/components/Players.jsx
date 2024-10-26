import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const Players = ({ handleSelected }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-5">Available Players</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
        {players.map((player) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card border rounded-lg">
            <figure className="px-5 pt-5">
              <img
                src={player.image}
                alt="Player"
                className="rounded-xl h-[300px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-start items-center gap-5">
                <FaUser />
                <h2 className="card-title text-2xl font-bold">{player.name}</h2>
              </div>
              <div className="flex items-center justify-between text-xl ">
                <div className="flex items-center gap-5">
                  <FaFlag />
                  <h1 className="font-bold">{player.country}</h1>
                </div>
                <div>
                  <p className="font-bold">{player.role}</p>
                </div>
              </div>
              <p className="text-xl font-bold">Ratings</p>
              <div className="flex items-center justify-between text-xl font-bold">
                <h1>{player.batting}</h1>
                <h1>{player.bowling}</h1>
              </div>
              <div className="flex items-center justify-between text-xl font-bold">
                <p>Price: ${player.price} </p>
                <button
                  onClick={() => handleSelected(player)}
                  className="btn bg-pink-200"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;

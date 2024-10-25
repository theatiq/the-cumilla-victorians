import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const Players = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-5">Available Players</h1>
      <div className="grid grid-cols-3 mb-20">
        <div className="card border rounded-lg">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/1vs1y40/1-Tamim.jpg"
              alt="Player"
              className="rounded-xl h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-start items-center gap-5">
              <FaUser />
              <h2 className="card-title text-2xl font-bold">Tamim Iqbal</h2>
            </div>
            <div className="flex items-center justify-between text-xl ">
              <div className="flex items-center gap-5">
                <FaFlag />
                <h1 className="font-bold">Bangladesh</h1>
              </div>
              <div>
                <p className="font-bold">Batter</p>
              </div>
            </div>
            <p className="text-xl font-bold">Ratings</p>
            <div className="flex items-center justify-between text-xl font-bold">
              <h1>Left-Hand-Bat</h1>
              <h1>N/A</h1>
            </div>
            <div className="flex items-center justify-between text-xl font-bold">
              <p>Price: $500000 </p>
              <button className="btn btn-primary">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;

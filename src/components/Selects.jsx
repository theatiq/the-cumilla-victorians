import { RiDeleteBin6Fill } from "react-icons/ri";

const Selects = ({ selected, handleDelete }) => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <h1 className="text-4xl font-bold mb-5">
        Selected Players: {selected.length}/6
      </h1>
      {selected.map((player) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex items-center justify-between border rounded-lg p-5 mb-5">
          <div className="flex items-center justify-between gap-5">
            <div>
              <img
                src={player.image}
                alt="Player"
                className="h-[75px] w-[100px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{player.name}</h1>
              <p>{player.role}</p>
            </div>
          </div>
          <div
            onClick={() => handleDelete(player)}
            className="text-red-300 text-xl cursor-pointer"
          >
            <RiDeleteBin6Fill />
          </div>
        </div>
      ))}

      <button className="btn btn-primary mt-5">Add More Players</button>
    </div>
  );
};

export default Selects;

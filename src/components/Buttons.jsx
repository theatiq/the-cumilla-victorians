const Buttons = ({ handleCurrent, selected }) => {
  return (
    <div className="flex place-content-end items-center gap-5 mb-5 w-11/12 mx-auto sticky top-40 z-20">
      <button
        onClick={() => handleCurrent("available")}
        className="btn bg-yellow-400 border-none text-xl"
      >
        Available
      </button>
      <button
        onClick={() => handleCurrent("selected")}
        className="btn bg-green-500 border-none text-xl"
      >
        Selected ({selected.length})
      </button>
    </div>
  );
};

export default Buttons;

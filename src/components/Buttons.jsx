const Buttons = ({ handleCurrent, selected }) => {
  return (
    <div className="flex place-content-end items-center gap-5 mb-5 w-11/12 mx-auto sticky top-32 z-20">
      <button
        onClick={() => handleCurrent("available")}
        className="btn btn-primary"
      >
        Available
      </button>
      <button
        onClick={() => handleCurrent("selected")}
        className="btn btn-primary"
      >
        Selected ({selected.length})
      </button>
    </div>
  );
};

export default Buttons;

const Buttons = ({ handleCurrent, selected, current }) => {
  return (
    <div className="flex place-content-end items-center mb-5 w-11/12 mx-auto sticky top-40 z-20">
      <button
        onClick={() => handleCurrent("available")}
        className={`btn ${
          current ? "btn-secondary" : ""
        } border-none text-xl rounded-r-none`}
      >
        Available
      </button>
      <button
        onClick={() => handleCurrent("selected")}
        className={`btn ${
          !current ? "btn-secondary" : ""
        } border-none text-xl rounded-l-none`}
      >
        Selected ({selected.length})
      </button>
    </div>
  );
};

export default Buttons;

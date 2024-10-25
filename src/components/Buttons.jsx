const Buttons = ({handleCurrent}) => {
  return (
    <div className="flex place-content-end items-center gap-5 mb-5 w-11/12 mx-auto">
      <button onClick={()=>handleCurrent("available")} className="btn btn-primary">Available</button>
      <button onClick={()=>handleCurrent("selected")}  className="btn btn-primary">Selected</button>
    </div>
  );
};

export default Buttons;

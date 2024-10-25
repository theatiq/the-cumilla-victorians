import React from "react";

const Selects = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <h1 className="text-4xl font-bold mb-5">Selected Players {}/6</h1>
      <div className="flex items-center justify-between border rounded-lg p-5 mb-5">
        <div className="flex items-center justify-between gap-5">
          <div>
            <img
              src="https://i.ibb.co.com/brLPPNQ/1-Tamim.jpg"
              alt=""
              className="h-[75px] w-full rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Name</h1>
            <p>Right-Hand-Bat</p>
          </div>
        </div>
        <div>Delete</div>
      </div>
      <button className="btn btn-primary mt-5">Add More Players</button>
    </div>
  );
};

export default Selects;

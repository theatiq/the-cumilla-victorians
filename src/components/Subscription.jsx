import React from "react";

const Subscription = () => {
  return (
    <div className="w-11/12 mx-auto top-32 relative z-10 border rounded-lg p-5">
      <div
        className="min-h-48 rounded-lg overflow-hidden w-full"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/YhGDmgx/bg-shadow.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="mb-5">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex justify-center gap-5">
              <input
                className="rounded-lg px-5"
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

const Banner = ({ totalCoin }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="hero min-h-96 rounded-lg overflow-hidden mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/yQhfhw0/new-Banner2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="mt-[140px]">
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-xl">Beyond Boundaries Beyond Limits</p>
            <button onClick={() => totalCoin()} className="btn btn-secondary">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

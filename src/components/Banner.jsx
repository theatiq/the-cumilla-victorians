const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-96 rounded-lg overflow-hidden mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/MDKv6dK/banner-main.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold pt-20">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-xl">Beyond Boundaries Beyond Limits</p>
            <button className="btn btn-primary">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

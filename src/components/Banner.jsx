import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/YdX9JKr/kelly-sikkema-LM17x-Cof-KA0-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">WELCOME</h1>
          <p className="mb-5 text-xl">
            Task Nest: Elevate productivity! Log in, create tasks, and drag to
            conquer goals
          </p>
          <Link to={"/dashboard"}>
            <button className="btn btn-primary">Lets Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

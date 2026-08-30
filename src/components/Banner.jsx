import playStore from "../assets/playstore.png";
import appStore from "../assets/appStore.png";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="mt-8 md:mt-10">
      {/* Banner text */}
      <div className="px-4 mt-10">
        <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl ">
          We Build
          <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-[#627382] sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden md:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Store buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5 md:mt-10">
          <button className="btn px-4 font-semibold sm:px-6">
            <img
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              src={playStore}
              alt="Play Store"
            />
            Play Store
          </button>

          <button className="btn px-4 font-semibold sm:px-6">
            <img
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              src={appStore}
              alt="App Store"
            />
            App Store
          </button>
        </div>

        {/* Banner image */}
        <div className="mt-7 flex justify-center">
          <img
            className="w-full max-w-2xl object-contain"
            src={bannerImage}
            alt="Hero Apps banner"
          />
        </div>
      </div>

      {/* Statistics section */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-10 text-center text-white sm:px-10 md:py-12 rounded-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl ">
          Trusted by Millions, Built for You
        </h2>

        <div className="mt-10 flex flex-col justify-center gap-10 sm:flex-row sm:flex-wrap md:gap-16 lg:gap-24">
          {/* Downloads */}
          <div className="min-w-44">
            <p className="text-sm text-purple-100">Total Downloads</p>

            <h3 className="mt-2 text-4xl font-bold sm:text-5xl">
              29.6M
            </h3>

            <p className="mt-2 text-sm text-purple-100">
              21% more than last month
            </p>
          </div>

          {/* Reviews */}
          <div className="min-w-44">
            <p className="text-sm text-purple-100">Total Reviews</p>

            <h3 className="mt-2 text-4xl font-bold sm:text-5xl">
              906K
            </h3>

            <p className="mt-2 text-sm text-purple-100">
              46% more than last month
            </p>
          </div>

          {/* Active apps */}
          <div className="min-w-44">
            <p className="text-sm text-purple-100">Active Apps</p>

            <h3 className="mt-2 text-4xl font-bold sm:text-5xl">
              132+
            </h3>

            <p className="mt-2 text-sm text-purple-100">
              31 more will launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import { Link } from "react-router";
import SingleApp from "./SingleApp";

const Apps = ({ appData = [] }) => {
  return (
    <section className="mt-10 bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-7xl">
 
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#102A43] sm:text-4xl">
            Trending{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Apps
            </span>
          </h1>

          <p className="mt-2 text-sm text-[#627382]">
            Explore all trending apps on the market developed by us
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {appData.slice(0, 8).map((singleApp) => (
            <SingleApp
              key={singleApp.id}
              singleApp={singleApp}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/apps"
            className="btn border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Show All Apps →
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Apps;
import { useState } from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../pages/SingleApp"


const AllApps = () => {
  const appData = useLoaderData();
  const [searchText, setSearchText] = useState("");

//   search bar
  const filteredApps = appData.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-[#102A43] sm:text-4xl">
            Our All{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Applications
            </span>
          </h1>

          <p className="mt-3 text-sm text-[#627382]">
            Explore all apps on the market developed by us. We code for
            millions.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-[#102A43]">
            ({filteredApps.length}) Apps Found
          </h2>

          <input
            type="text"
            placeholder="Search Apps"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="input w-full border border-gray-300 bg-white outline-none focus:border-[#632EE3] sm:w-72"
          />
        </div>


        {filteredApps.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {filteredApps.map((singleApp) => (
              <SingleApp
                key={singleApp.id}
                singleApp={singleApp}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-[#102A43]">
              No Apps Found
            </h3>

            <p className="mt-2 text-sm text-[#627382]">
              Please search using another app name.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllApps;
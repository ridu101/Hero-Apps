import { useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import Loading from "../components/Loading";
import SingleApp from "./SingleApp";

const AllAppsPage = () => {
  const appData = useLoaderData();

  const [searchText, setSearchText] = useState("");
  const [filteredApps, setFilteredApps] =useState(appData);

  const [isSearching, setIsSearching] =useState(false);

  const handleSearch = (event) => {
    const searchValue = event.target.value;

    setSearchText(searchValue);
    setIsSearching(true);

    setTimeout(() => {
      const searchedApps = appData.filter((app) =>
        app.title
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

      setFilteredApps(searchedApps);
      setIsSearching(false);
    }, 1000);
  };
  return (
    <section className="min-h-screen bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#102A43] sm:text-4xl">
            Our All{" "}
            <span className="text-[#632EE3]">
              Applications
            </span>
          </h1>
          <p className="mt-2 text-sm text-[#627382]">
            Explore all apps on the market developed by us
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-[#102A43]">
            ({filteredApps.length}) Apps Found
          </h2>
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Apps"
              value={searchText}
              onChange={handleSearch}
              className="input w-full border border-gray-300 bg-white pl-10"
            />
          </div>
        </div>
        {isSearching && <Loading />}
        {!isSearching && filteredApps.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredApps.map((singleApp) => (
              <SingleApp
                key={singleApp.id}
                singleApp={singleApp}
              />
            ))}
          </div>
        )}
        {!isSearching && filteredApps.length === 0 && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#102A43]">
              No Apps Found
            </h2>

            <p className="mt-2 text-[#627382]">
              Please search using another app name.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllAppsPage;
import { useState } from "react";
import { Link } from "react-router";

const formatNumber = (number) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);
};

const Installation = () => {
  // LocalStorage থেকে installed apps নেওয়া
  const [installedApps, setInstalledApps] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("installedApps")) || []
    );
  });

  const [sortBy, setSortBy] = useState("default");

  // App uninstall করা
  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter(
      (app) => app.id !== id
    );

    setInstalledApps(remainingApps);

    localStorage.setItem(
      "installedApps",
      JSON.stringify(remainingApps)
    );
  };

  // Original array ঠিক রেখে copy তৈরি করা
  const sortedApps = [...installedApps];

  // বেশি download থেকে কম download
  if (sortBy === "high-low") {
    sortedApps.sort((firstApp, secondApp) => {
      return secondApp.downloads - firstApp.downloads;
    });
  }

  // কম download থেকে বেশি download
  if (sortBy === "low-high") {
    sortedApps.sort((firstApp, secondApp) => {
      return firstApp.downloads - secondApp.downloads;
    });
  }

  return (
    <section className="min-h-screen bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#102A43] sm:text-4xl">
            Your Installed Apps
          </h1>

          <p className="mt-2 text-sm text-[#627382]">
            Explore and manage all your installed applications
          </p>
        </div>

        {/* App count and sorting */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-[#102A43]">
            {installedApps.length} Apps Found
          </h2>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            className="select border border-gray-300 bg-white"
          >
            <option value="default">
              Sort By Downloads
            </option>

            <option value="high-low">
              High-Low
            </option>

            <option value="low-high">
              Low-High
            </option>
          </select>
        </div>

        {/* Installed apps */}
        {installedApps.length > 0 ? (
          <div className="mt-5 space-y-4">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                {/* App image */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-20 w-20 rounded-md bg-gray-100 object-contain p-2"
                />

                {/* App information */}
                <div className="flex-1">
                  <Link
                    to={`/apps/${app.id}`}
                    className="font-semibold text-[#102A43]"
                  >
                    {app.title}
                  </Link>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <span className="text-green-500">
                      ↓ {formatNumber(app.downloads)}
                    </span>

                    <span className="text-orange-500">
                      ★ {app.ratingAvg}
                    </span>

                    <span className="text-[#627382]">
                      {app.size} MB
                    </span>
                  </div>
                </div>

                {/* Uninstall button */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="btn btn-sm border-none bg-green-500 text-white"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* কোনো installed app না থাকলে */
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#102A43]">
              No Installed Apps
            </h2>

            <p className="mt-2 text-[#627382]">
              You have not installed any apps yet.
            </p>

            <Link
              to="/apps"
              className="btn mt-6 border-none bg-[#632EE3] text-white"
            >
              Explore Apps
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Installation;
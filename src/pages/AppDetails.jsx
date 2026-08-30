import { Link, useLoaderData, useParams } from "react-router";
import {
  FaDownload,
  FaStar,
  FaCommentDots,
} from "react-icons/fa";
import appErrorImg from '../assets/App-Error.png'

const AppDetails = () => {
  // JSON থেকে সব app নেওয়া
  const appData = useLoaderData();

  // URL থেকে app-এর id নেওয়া
  const { id } = useParams();

  // id অনুযায়ী নির্দিষ্ট app খুঁজে বের করা
  const app = appData.find(
    (singleApp) => singleApp.id === Number(id)
  );

  // App পাওয়া না গেলে
  if (!app) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#F6F6F6] px-5 py-16">
      <div className="text-center">
        {/* Error image */}
        <img
          className="mx-auto w-full max-w-xs object-contain sm:max-w-sm"
          src={appErrorImg}
          alt="App not found"
        />

        {/* Error title */}
        <h1 className="mt-6 text-3xl font-bold text-[#102A43] sm:text-4xl">
          Oops! App Not Found
        </h1>

        {/* Error message */}
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#627382] sm:text-base">
          The app you are looking for was not found in our system. Please try
          another app.
        </p>

        {/* Back button */}
        <Link
          to="/apps"
          className="btn mt-7 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
}

  // নির্দিষ্ট app-এর data
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings = [],
  } = app;

  // বড় number-কে 8M, 54K এভাবে দেখানো
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(number);
  };

  // Rating-এর সবচেয়ে বড় count বের করা
  const highestRatingCount = Math.max(
    ...ratings.map((rating) => rating.count),
    1
  );

  return (
    <section className="min-h-screen bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        {/* App information */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* App image */}
          <div className="flex justify-center">
            <div className="h-64 w-full rounded-lg bg-white p-6 shadow-sm sm:w-64">
              <img
                className="h-full w-full object-contain"
                src={image}
                alt={title}
              />
            </div>
          </div>

          {/* App details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#102A43]">
              {title}
            </h1>

            <p className="mt-2 text-sm text-[#627382]">
              Developed by{" "}
              <span className="font-medium text-[#632EE3]">
                {companyName}
              </span>
            </p>

            <div className="my-6 border-t border-gray-300"></div>

            {/* App statistics */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {/* Downloads */}
              <div>
                <FaDownload className="text-2xl text-green-500" />

                <p className="mt-2 text-sm text-[#627382]">
                  Downloads
                </p>

                <h2 className="text-2xl font-bold text-[#102A43]">
                  {formatNumber(downloads)}
                </h2>
              </div>

              {/* Average rating */}
              <div>
                <FaStar className="text-2xl text-orange-500" />

                <p className="mt-2 text-sm text-[#627382]">
                  Average Rating
                </p>

                <h2 className="text-2xl font-bold text-[#102A43]">
                  {ratingAvg}
                </h2>
              </div>

              {/* Total reviews */}
              <div>
                <FaCommentDots className="text-2xl text-purple-500" />

                <p className="mt-2 text-sm text-[#627382]">
                  Total Reviews
                </p>

                <h2 className="text-2xl font-bold text-[#102A43]">
                  {formatNumber(reviews)}
                </h2>
              </div>
            </div>

            {/* Install button */}
            <button className="btn mt-6 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              Install Now ({size} MB)
            </button>
          </div>
        </div>

        {/* Ratings section */}
        <div className="mt-10 border-t border-gray-300 pt-8">
          <h2 className="text-xl font-bold text-[#102A43]">
            Ratings
          </h2>

          <div className="mt-6 space-y-5">
            {[...ratings].reverse().map((rating) => {
              const barWidth =
                (rating.count / highestRatingCount) * 100;

              return (
                <div
                  key={rating.name}
                  className="flex items-center gap-4"
                >
                  <p className="w-14 text-sm text-[#627382]">
                    {rating.name}
                  </p>

                  {/* Rating progress bar */}
                  <div className="h-5 flex-1 overflow-hidden rounded-sm bg-gray-200">
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: `${barWidth}%` }}
                    ></div>
                  </div>

                  <p className="hidden w-16 text-right text-sm text-[#627382] sm:block">
                    {formatNumber(rating.count)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description section */}
        <div className="mt-10 border-t border-gray-300 pt-8">
          <h2 className="text-xl font-bold text-[#102A43]">
            Description
          </h2>

          <p className="mt-5 leading-7 text-[#627382]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
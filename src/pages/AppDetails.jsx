import { useState } from "react";

import {
  Link,
  useLoaderData,
  useParams,
} from "react-router";

import {
  FaDownload,
  FaStar,
  FaCommentDots,
} from "react-icons/fa";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import appErrorImg from "../assets/App-Error.png";
import heroLogo from "../assets/logo.png";
import RatingsChart from "../components/RatingsChart";

const MySwal = withReactContent(Swal);

const formatNumber = (number) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(number));
};

const AppDetails = () => {
 
  const appData = useLoaderData();
  const { id } = useParams();
  const app = Array.isArray(appData)
    ? appData.find(
        (singleApp) => singleApp.id === Number(id)
      )
    : null;
  const [isInstalled, setIsInstalled] = useState(() => {
    const savedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    return savedApps.some(
      (savedApp) => savedApp.id === Number(id)
    );
  });
  const handleInstall = async () => {
    if (!app || isInstalled) {
      return;
    }
    await MySwal.fire({
      html: (
        <div className="py-4">
          <div className="flex items-center justify-center text-3xl font-bold text-[#102A43]">
            <span>Inst</span>

            <img
              src={heroLogo}
              alt="Installing"
              className="mx-1 h-10 w-10 animate-spin"
            />

            <span>lling</span>
          </div>

          <p className="mt-4 text-[#627382]">
            Please wait while {app.title} is being installed.
          </p>
        </div>
      ),

      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 1500,
      timerProgressBar: true,
    });

    const savedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

 
    const alreadyInstalled = savedApps.some(
      (savedApp) => savedApp.id === app.id
    );

  
    if (!alreadyInstalled) {
      const updatedApps = [...savedApps, app];

      localStorage.setItem(
        "installedApps",
        JSON.stringify(updatedApps)
      );
    }
    setIsInstalled(true);

    // Success alert
    await MySwal.fire({
      title: "Installed!",
      text: `${app.title} has been installed successfully.`,
      icon: "success",
      confirmButtonText: "Done",
      confirmButtonColor: "#632EE3",
    });
  };
  if (!app) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#F6F6F6] px-5 py-16">
      
        <div className="text-center">
          <img
            className="mx-auto w-full max-w-xs object-contain sm:max-w-sm"
            src={appErrorImg}
            alt="App not found"
          />

          <h1 className="mt-6 text-3xl font-bold text-[#102A43] sm:text-4xl">
            Oops! App Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#627382] sm:text-base">
            The app you are looking for was not found in our system. Please try
            another app.
          </p>

          <Link
            to="/apps"
            className="btn mt-7 border-none bg-[#632EE3] px-8 text-white"
          >
            Go Back
          </Link>
        </div>
      </section>
    );
  }
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

  return (
    <section className="min-h-screen bg-[#F6F6F6] px-5 py-12">
      <title>{title}</title>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex justify-center">
            <div className="h-64 w-full rounded-lg bg-white p-6 shadow-sm sm:w-64">
              <img
                className="h-full w-full object-contain"
                src={image}
                alt={title}
              />
            </div>
          </div>
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
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <FaDownload className="text-2xl text-green-500" />
                <p className="mt-2 text-sm text-[#627382]">
                  Downloads
                </p>

                <h2 className="text-2xl font-bold text-[#102A43]">
                  {formatNumber(downloads)}
                </h2>
              </div>
              <div>
                <FaStar className="text-2xl text-orange-500" />

                <p className="mt-2 text-sm text-[#627382]">
                  Average Rating
                </p>

                <h2 className="text-2xl font-bold text-[#102A43]">
                  {ratingAvg}
                </h2>
              </div>
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
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="btn mt-6 border-none bg-[#632EE3] text-white disabled:bg-gray-400 disabled:text-white"
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-8">
          <h2 className="text-xl font-bold text-[#102A43]">
            Ratings
          </h2>

          <RatingsChart ratings={ratings} />
        </div>
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
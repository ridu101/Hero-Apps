import { Link } from "react-router";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#F6F6F6] px-5 py-16">
      <title>Error-404</title>
      <div className="text-center">
        <img
          className="mx-auto w-full max-w-sm object-contain"
          src={errorImg}
          alt="404 page not found"
        />
        <h1 className="mt-8 text-3xl font-bold text-[#102A43] sm:text-4xl">
          Oops, Page Not Found!
        </h1>
        <p className="mt-3 text-sm text-[#627382] sm:text-base">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="btn mt-7 border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
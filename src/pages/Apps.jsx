// import React from 'react';

import { Suspense } from "react";
import SingleApp from "./SingleApp";

const Apps = ({ appData }) => {
  return (
    <section className="mt-10 bg-[#F6F6F6] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#102A43]">Trending <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Apps</span></h1>

          <p className="mt-2 text-sm text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <Suspense
          fallback={
            <p className="mt-10 text-center text-gray-500">Data Loading...</p>
          }
        >
          <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {appData.map((singleApp) => (
              <SingleApp key={singleApp.id} singleApp={singleApp} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Apps;

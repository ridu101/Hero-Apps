// import React from 'react';

import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Apps from "./Apps";


const Home = () => {
    const appData= useLoaderData();
    return (
        <div>
            <title>Home </title>
         <Banner></Banner>
         <Apps appData={appData}></Apps>
        </div>
    );
};

export default Home;
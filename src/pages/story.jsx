import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const StoryPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col h-screen bg-black">
          <div className="m-auto px-8 w-full xs:px-16 xl:px-32">
            <h1 className="text-center my-4 text-3xl font-black text-rose-800 xs:text-6xl">LOADING CHAPTER 1</h1>
            <div className="w-full bg-black rounded-2xl h-20 border-8 border-rose-800 overflow-hidden">
              <div className="w-3/4 bg-rose-800 h-12 rounded-md my-2 mx-2"></div>
            </div>
            <Link to="/">
              <div className="flex mt-8 xs:mt-16 group justify-center gap-3 xs:gap-6">
                <BsArrowLeftCircleFill className="my-auto text-3xl group-hover:text-cyan-400 xs:text-6xl"/>
                <h2 className="my-auto text-center text-3xl font-bold
                            group-hover:text-cyan-400
                              xs:text-6xl"> 
                  GO BACK
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StoryPage;

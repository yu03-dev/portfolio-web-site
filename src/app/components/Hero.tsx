import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div
      id="home"
      className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="md:my-36 lg:ml-20 mx-auto flex flex-col items-center md:items-start">
          <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl">
            TailwindCSSで
            <br />
            美しいサイトを
            <br />
            作ります
          </h1>
          <button className="px-6 py-4 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10">
            <i className="fa-solid fa-rocket mr-1"></i>
            <span>もっと見る</span>
          </button>
        </div>
        <Image
          src="/human.jpg"
          alt="image"
          width={500}
          height={500}
          className="w-10/12 mt-12 mx-auto -z-10 md:absolute md:right-6 md:w-3/5 md:mt-0 lg:top-2 lg:right-40 lg:w-3/6"
        />
      </div>
    </div>
  );
};

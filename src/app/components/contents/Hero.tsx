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
          <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl mb-10">
            レスポン
            <br />
            シブ
            <br />
            完全に理解した
          </h1>
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

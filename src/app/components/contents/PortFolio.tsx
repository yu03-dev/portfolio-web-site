import Image from "next/image";
import React from "react";

const urls = [
  "/portfolio1.jpg",
  "/portfolio2.jpg",
  "/portfolio3.jpg",
  "/portfolio4.jpg",
  "/portfolio5.jpg",
  "/portfolio6.jpg",
];

const ImageComponent = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      alt="image"
      width={500}
      height={500}
      className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
    />
  );
};

export const PortFolio = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {urls.map((url) => {
        return <ImageComponent url={url} />;
      })}
    </div>
  );
};

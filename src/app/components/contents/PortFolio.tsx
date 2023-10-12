import Image from "next/image";
import Link from "next/link";
import React from "react";

type ImageURL = {
  href: string;
  src: string;
};

const imageURLs = [
  { href: "https://cash-tracker-eta.vercel.app/", src: "/cash-tracker.png" },
  { href: "https://atcoder.jp/users/condy", src: "/atcoder.png" },
  { href: "https://github.com/yu03-dev", src: "/github.png" },
];

const ImageComponent = ({ imageURL }: { imageURL: ImageURL }) => {
  const { href, src } = imageURL;
  return (
    <Link href={href}>
      <Image
        src={src}
        alt="image"
        width={500}
        height={500}
        className="w-full object-cover h-72 rounded-md cursor-pointer hover:scale-110 duration-300"
      />
    </Link>
  );
};

export const PortFolio = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {imageURLs.map((item, index) => {
        return <ImageComponent imageURL={item} key={index} />;
      })}
    </div>
  );
};

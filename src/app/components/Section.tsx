import Image from "next/image";
import React from "react";

export type sectionProps = {
  id: string;
  title: string;
  discription: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, discription, children }: sectionProps) => {
  return (
    <div
      id={id}
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">{title}</h2>
        <p className="section-paragraph">{discription}</p>
        {children}
      </section>
    </div>
  );
};

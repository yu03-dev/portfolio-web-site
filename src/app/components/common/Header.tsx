"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Navbar } from "@/app/lib/material-tailwind";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type navItemsType = {
  title: string;
  href: string;
};

const navItems: navItemsType[] = [
  { title: "ホーム", href: "#home" },
  { title: "ポートフォリオ", href: "#portfolio" },
  { title: "スキル一覧", href: "#skills" },
];

export const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar color="transparent" className="mx-auto py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Condy.com</div>
        <div className="space-x-12 hidden md:flex items-center">
          {navItems.map((navItem, index) => {
            return (
              <Link
                href={navItem.href}
                key={index}
                className="hover:text-selected-text transition duration-300"
              >
                {navItem.title}
              </Link>
            );
          })}
        </div>
        <FontAwesomeIcon
          icon={openNav ? faX : faBars}
          onClick={() => setOpenNav((prev) => !prev)}
          className="md:hidden w-6 h-6"
        />
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto bg-gray-900 rounded-md mt-2">
          <div className="w-full flex flex-col items-center space-y-4 p-2">
            {navItems.map((navItem, index) => {
              return (
                <Link
                  href={navItem.href}
                  key={index}
                  className="hover:text-selected-text transition duration-300"
                >
                  {navItem.title}
                </Link>
              );
            })}
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

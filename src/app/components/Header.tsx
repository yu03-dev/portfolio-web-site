import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const navList = [
  <Link
    href="#home"
    className="hover:text-selected-text transition duration-300"
  >
    ホーム
  </Link>,
  <Link
    href="#portfolio"
    className="hover:text-selected-text transition duration-300"
  >
    ポートフォリオ
  </Link>,
  <Link
    href="#skills"
    className="hover:text-selected-text transition duration-300"
  >
    スキル一覧
  </Link>,
  <Link href="#contact">
    <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
      お問い合わせ
    </button>
  </Link>,
];

export const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Condy.com</div>
        <div className="space-x-12 hidden md:flex items-center">
          {navList.map((nav) => nav)}
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="w-6" />
        </div>
      </div>
    </header>
  );
};

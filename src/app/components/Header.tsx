import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button } from "./elements/Button";

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
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Condy.com</div>
        <div className="space-x-12 hidden md:flex items-center">
          {navItems.map((navItem) => {
            return (
              <Link
                href={navItem.href}
                key={navItem.href}
                className="hover:text-selected-text transition duration-300"
              >
                {navItem.title}
              </Link>
            );
          })}
          <Link href="#contact">
            <Button className="px-6 py-2">お問い合わせ</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="w-6" />
        </div>
      </div>
    </header>
  );
};

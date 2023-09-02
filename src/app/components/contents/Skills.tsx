import {
  IconDefinition,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type BoxContentProps = {
  title: string;
  discription: string;
  children: React.ReactNode;
};

type LangIconProps = {
  icon: IconDefinition;
  className: string | undefined;
};

// classNameにhoverした時のborderの色を指定する
const BorderBox = ({
  className,
  children,
}: {
  className: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className="my-16">
      <div
        className={
          className +
          " w-full border border-purple-300 transition-all cursor-pointer duration-300 p-16 lg:px-32 lg:py-20 flex justify-center md:justify-start md:space-x-32 items-center flex-wrap md:flex-nowrap"
        }
      >
        {children}
      </div>
    </div>
  );
};

// classNameでiconの色をtext-{color}で指定する
const LangIcon = ({ icon, className }: LangIconProps) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        className={className + " w-20 md:w-28 lg:w-32"}
      />
    </div>
  );
};

const Badge = ({ title }: { title: string }) => {
  return <div className="px-4 py-2 text-sm bg-badge rounded-sm">{title}</div>;
};

const BoxContent = ({ title, discription, children }: BoxContentProps) => {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center md:items-start w-full text-center md:text-left space-y-4">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
        {children}
      </div>
      <p className="text-secondary">{discription}</p>
    </div>
  );
};

export const Skills = () => {
  return (
    <>
      <BorderBox className="hover:border-yellow-300">
        <LangIcon icon={faJsSquare} className="text-yellow-300" />
        <BoxContent
          title="JavaScript"
          discription="TypeScript+Next.jsでフロントエンド開発しています。"
        >
          <Badge title="Webサイト制作" />
          <Badge title="フロントエンド開発" />
        </BoxContent>
      </BorderBox>
      <BorderBox className=" hover:border-blue-600">
        <LangIcon icon={faPython} className="text-blue-600" />
        <BoxContent
          title="Python"
          discription="大学院では機械学習の研究をしています。"
        >
          <Badge title="機械学習" />
          <Badge title="競技プログラミング" />
        </BoxContent>
      </BorderBox>
    </>
  );
};

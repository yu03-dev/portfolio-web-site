import { faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold">Condy.com</div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="#home"
              className="hover:text-selected-text transition duration-300"
            >
              ホーム
            </a>
            <a
              href="#portfolio"
              className="hover:text-selected-text transition duration-300"
            >
              ポートフォリオ
            </a>
            <a
              href="#skills"
              className="hover:text-selected-text transition duration-300"
            >
              スキル一覧
            </a>
            <a href="#contact">
              <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                お問い合わせ
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
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
      <div
        id="portfolio"
        className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">私のポートフォリオ</h2>
          <p className="section-paragraph">
            過去に作ったwebアプリケーションはこちら
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/portfolio1.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
            <Image
              src="/portfolio2.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
            <Image
              src="/portfolio3.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
            <Image
              src="/portfolio4.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
            <Image
              src="/portfolio5.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
            <Image
              src="/portfolio6.jpg"
              alt="image"
              width={500}
              height={500}
              className="w-full h-36 object-cover lg:h-72 rounded-md cursor-pointer"
            />
          </div>
        </section>
      </div>
      <div
        id="skills"
        className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">スキル一覧</h2>
          <p className="section-paragraph">
            私は以下のプログラミング言語の経験があります
          </p>
          <div className="my-16">
            <div className="w-full border border-purple-300 hover:border-yellow-300 transition-all cursor-pointer duration-300 p-16 lg:px-32 lg:py-20 flex justify-center md:justify-start md:space-x-32 items-center flex-wrap md:flex-nowrap">
              <div>
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="w-20 md:w-28 lg:w-32 text-yellow-300"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:justify-center md:items-start w-full text-center md:text-left space-y-4">
                <h3 className="text-3xl font-semibold">JavaScript</h3>
                <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
                  <div className="badge">Webサイト制作</div>
                  <div className="badge">フロントエンド開発</div>
                </div>
                <p className="text-secondary">
                  TypeScript+Next.jsでフロントエンド開発しています。
                </p>
              </div>
            </div>
          </div>
          <div className="my-16">
            <div className="w-full border border-purple-300 hover:border-blue-600 transition-all cursor-pointer duration-300 p-16 lg:px-32 lg:py-20 flex justify-center md:justify-start md:space-x-32 items-center flex-wrap md:flex-nowrap">
              <div>
                <FontAwesomeIcon
                  icon={faPython}
                  className="w-20 md:w-28 lg:w-32 text-blue-600"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:justify-center md:items-start w-full text-center md:text-left space-y-4">
                <h3 className="text-3xl font-semibold">Python</h3>
                <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
                  <div className="badge">機械学習</div>
                  <div className="badge">競技プログラミング</div>
                </div>
                <p className="text-secondary">
                  大学院では機械学習の研究をしています。
                  <br />
                  AtCoderもPythonで参加しています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

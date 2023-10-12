import { Header } from "./components/common/Header";
import { Hero } from "./components/contents/Hero";
import { Section } from "./components/common/Section";
import { PortFolio } from "./components/contents/PortFolio";
import { Skills } from "./components/contents/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Section
        id="portfolio"
        title="ポートフォリオ"
        discription="webアプリを作ったり、競技プログラミングをしたりするのが好きです(画像は古い情報の可能性あり)"
      >
        <PortFolio />
      </Section>
      <Section
        id="skills"
        title="スキル一覧"
        discription="私は以下のプログラミング言語の経験があります"
      >
        <Skills />
      </Section>
    </div>
  );
}

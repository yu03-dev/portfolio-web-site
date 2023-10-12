import { Header } from "./components/common/Header";
import { Hero } from "./components/contents/Hero";
import { Section } from "./components/common/Section";
import { PortFolio } from "./components/contents/PortFolio";
import { Skills } from "./components/contents/Skills";
import { Contact } from "./components/contents/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Section
        id="portfolio"
        title="私のポートフォリオ"
        discription="過去に作ったwebアプリケーションはこちら"
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
      <Section
        id="contact"
        title="お問い合わせ"
        discription="オファーお待ちしております。"
      >
        <Contact />
      </Section>
    </div>
  );
}

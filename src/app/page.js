import HeroPage from "./components/hero/page";
import TrendingIdeas from "./components/hero/Ideas/page";
import AboutPage from "./components/about/page";
import FAQPage from "./components/faq/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <TrendingIdeas />
      <AboutPage />
      <FAQPage />
    </>
  );
}
 
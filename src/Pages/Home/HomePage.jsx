import BestSeller from "./Bestsellers/BestSeller";
import Category from "./Category/Category";
import HeroSection from "./HeroSection/HeroSection";
import LogoSection from "./Logo/Logo";

function HomePage() {
  return (
    <>
      <HeroSection/>
      <Category/>
      <LogoSection/>
      <BestSeller/>
    </>
  );
}

export default HomePage;

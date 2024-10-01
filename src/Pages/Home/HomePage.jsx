import Navbar from "../../Components/Header/Nav/Navbar";
import BestSeller from "./Bestsellers/BestSeller";
import Category from "./Category/Category";
import HeroSection from "./HeroSection/HeroSection";
import LogoSection from "./Logo/Logo";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection/>
      <Category/>
      <LogoSection/>
      <BestSeller/>
    </>
  );
}

export default HomePage;

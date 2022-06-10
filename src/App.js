import {
  About,
  HeroSection,
  Navbar,
  Feature1,
  Feature2,
  Feature3,
} from "./components";
import "./app.scss";
import { RiBankLine } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
function App() {
  return (
    <div className="app flex-col">
      <Navbar />

      <HeroSection />
      <About />
      <div className="about__last-rectangle">
        <div className="flex justify-between items-center">
          <RiBankLine className="about__last-rectangle-icon" />
          <p>50+ Banks</p>
        </div>
        <div className="flex justify-between items-center">
          <AiFillEyeInvisible className="about__last-rectangle-icon" />
          <p>Contactless KYC </p>
        </div>
        <div className="flex justify-between items-center">
          <BiUserCircle className="about__last-rectangle-icon" />
          <p>5,00,000+ Happy Customers</p>
        </div>
      </div>
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

export default App;

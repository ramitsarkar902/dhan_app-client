import React from "react";
import "./footer.scss";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center footer__wrapper">
      <div className="footer__top">
        <div>
          <BsFacebook className="social__icons" />
          <BsTwitter className="social__icons" />
          <BsInstagram className="social__icons" />
          <BsLinkedin className="social__icons" />
          <BsYoutube className="social__icons" />
        </div>
        <div>
          <input type="email" placeholder="Enter Your Email ID" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer__middle">
        <div className="logo__footer">Logo later</div>
        <div>
          <h2>DHAN APP</h2>

          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h2>CALCULATOR</h2>
          <p>EMI Calculator</p>
          <p>Home Loan Calculator</p>
          <p>Personal Loan EMI Calculator</p>
        </div>
      </div>
      <div className="borderLine"></div>
      <div className="footer__bottom">
        <div>
          Privacy Policy | Terms of Use | Disclaimer | Intellectual Policy |
          Sitemap
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
    </div>
  );
};

export default Footer;

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
        <img
          className="logo__footer"
          src="https://s3-alpha-sig.figma.com/img/5808/e5ed/2e6c5034296a0b916f8c4d9649aa701d?Expires=1655683200&Signature=NHQHPVhksvfjz6qkK1c-kBjyfkSm9p~m5xXrxtEve4sXSsNEEch-u9mU4WXwipF3hAgZBS3fheX4WJxuqGuZ1rrtpk0As8UdoLcT0WgQM~o0IllMYw1kK~sekbmWFaz~2l1t26yy150LAWuwfZrlGXcYIFM9sl6DT8QiPJxuSFVrTAenSTr8ia5T6CnpZlckp8X7RKzMi0y~hFYOLs9-yZ950FfHYfa~ore-84nEU0qUB~7su0~xncqgPljmLwuSsES~JkWXLYlV9sw5J4HQdatuF-O9MJH1KkxLN0ygMzm12UprGXGzhQCE29IiI2ov5sYERDKpQkJ5JTN-TQzgWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
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

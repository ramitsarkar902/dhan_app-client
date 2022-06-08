import React from "react";
import "./heroSection.scss";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
function HeroSection() {
  return (
    <div
      id="Home"
      className="herosection__wrapper flex justify-start app__container"
    >
      <div className="herosection__left-div">
        <div className="herosection__left-top mb-3 w-full flex-col">
          <h2>Get instant loans in just 15 minutes</h2>
          <p>Loan starting from ₹1000 to ₹5000000</p>
        </div>
        <div className="herosection__left-bottom w-full mx-4 flex-col">
          <div className="flex w-full">
            <input type="text" placeholder="+91" />
            <button>Apply</button>
          </div>
          <p className="w-full text-center">
            {" "}
            By submitting this form, you have read and agree to the{" "}
            <a className="cursor-pointer hover:border-b-2 border-blue-400 hover:text-cyan-400">
              Terms of Use & Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex herosection__left-last justify-end w-full">
          <button>Download Dhan App</button>
        </div>
      </div>
      <div className="herosection__right-div relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/dac9/527c/ecacccf7c00e93cf712f59bcfb5b1b6e?Expires=1655683200&Signature=hKaugcQbdZadAw3xszE5AQxZKbe~mh9xTRPpG1BdPOKXERojNocFgjvWoft5NX8bkUN-IXTRA92FC81QvOQe~q8YZnQ5c~RrcRyVb7MswgcDIBrmOxGN4eU-ZxW5zCpVJDKxUyJrZSp2XOa3PC8YdiqLpQiaoVIkIKHyDEYZPP97POjatLNZfguoHQWNOYYUtMSLbo95RQW8AXATk9H~n88y2Tc3~Pibn0nhWKS-~29V7PaBOXP6h0OOGW8MDnwvoEMOKnRnJSWBRVbmkVyaivFBGZzoNGQJmWH2-G49KD54kn7TwJeUkLxAiVbWmQlVcaQdw4W6UGniJgr4C1mmcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div className="">
          <h2>
            Online Loans <p>make sense</p>
          </h2>
          <p className="flex items-center justify-center">
            <MdOutlineStickyNote2
              style={{ width: "53px", height: "53px", color: "#837C7C" }}
            />{" "}
            Instant quote with a soft credit check
          </p>
          <p className="flex">
            <FiLogOut
              style={{ width: "53px", height: "53px", color: "#837C7C" }}
            />
            Small loans issued within 15 minutes
          </p>
          <p>High approval rates</p>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

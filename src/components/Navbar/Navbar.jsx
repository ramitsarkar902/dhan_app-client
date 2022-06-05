import React from "react";
import "./navbar.scss";
import { FiPhoneCall } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
function Navbar() {
  return (
    <div className="navbar__wrapper pt-2 flex justify-center relative items-center ">
      <div className="absolute navbar__logo">
        <img
          className="w-full h-full"
          src="https://s3-alpha-sig.figma.com/img/5808/e5ed/2e6c5034296a0b916f8c4d9649aa701d?Expires=1655078400&Signature=R8OPSOG4HKwMFMFWcVe6DE7XuMvmTu7MBV8vkZSPHxqzL4a55pIg5vQeWdvq6eRCAGNFIuv0lJtwut4WzRJOwLv3YOuj8lXNgQuxGxJZaDs5fEAZ-TTyV9Qdqmq2lKrjoUwl8lwURu1KAHETGkx3rBYLXHn7CcWv6-S3e~bDTJTiq70zFYDzH9oxjJpQR0R~OzSYl9LCwJIDTvBXiYtVmrubczhr6P8AhRoFjJllZl4A1lDFTLGeSdLQkw2IEiX4S744zUqz-~5UIMyxeiyW0vAoixukYL2bQOQXCSdr-hRoCYLPsn~7k~DVSZfR0SmwVRYSKBG~Zfm~0kMRjOCB~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="app logo"
        />
      </div>
      <div className="navbar__navigation-titles flex">
        {["Home", "About", "Login"].map((title, index) => (
          <div className="navbar__navigation-title " key={index}>
            {title}
          </div>
        ))}
      </div>

      {/* <div
            className={`navbar__right-icon flex-col items-center ${
              t === "Download App" ? "blue__bg" : "white__bg"
            }`}
            key={index}
          >
          {t}
          </div> */}
      <div className="navbar__right-icons absolute flex">
        {["Download App", "Call us"].map((t, index) => {
          return (
            <>
              {t === "Download App" ? (
                <div
                  className={`navbar__right-icon flex-col items-center ${
                    t === "Download App" ? "blue__bg" : "white__bg"
                  }`}
                  key={index}
                >
                  {t}
                </div>
              ) : (
                <div
                  className={`navbar__right-icon flex justify-between items-center ${
                    t === "Download App" ? "blue__bg" : "white__bg"
                  }`}
                  key={index}
                >
                  <FiPhoneCall style={{ marginRight: "15px" }} />
                  {t}
                </div>
              )}
            </>
          );
        })}
      </div>
      <VscThreeBars className="navbar__dropdown-icon" />
    </div>
  );
}

export default Navbar;

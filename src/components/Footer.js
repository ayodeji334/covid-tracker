import React from "react";
import { BsHeartFill } from "react-icons/bs";
function Footer() {
  const odunayo = "https://facebook.com/fawumi.odunayojohn";
  return (
    <div className="footer text-center bg-white p-3">
      <p className="font-weight-bold m-0">
        Made with <BsHeartFill color="red" /> By{" "}
        <a href={odunayo} target="_blank" rel="noopener noreferrer">
          Odunayo Fawumi
        </a>
        . Powered by Firebase.
      </p>
    </div>
  );
}

export default Footer;

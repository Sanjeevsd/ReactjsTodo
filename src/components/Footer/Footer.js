import { Typography } from "@material-ui/core";
import { Facebook, GitHub, Language } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a
          href="https://www.facebook.com/sanzeevd"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a href="https://github.com/sanjeevsd" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <a href="https://sanjeevd.com.np/" target="_blank" rel="noreferrer">
          <Language />
        </a>
      </div>
      <div className="footer_right">
        <Typography className="footer_details">
          Developed by
          <a href="https://sanjeevd.com.np/" rel="noreferrer" target="_blank">
            Sanjeev Das
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

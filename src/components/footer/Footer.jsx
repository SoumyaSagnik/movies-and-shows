import React from "react";
import "./Footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <a
              href="http://portfolio.soumyakhanda.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li className="menuItem">
            <a
              href="https://blogs-ssk.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="menuItem">
            <a
              href="https://leetcode.com/SoumyaKhanda/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li className="menuItem">
            <a
              href="https://design-showcase-ssk.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Custom Designs
            </a>
          </li>
        </ul>
        <div className="infoText">
          Developed with ReactJS. If you liked this project, consider giving the
          git repo a like.
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/SoumyaSagnik/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/soumya-sagnik-khanda-0446641b8/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://twitter.com/Soumya_Sagnik"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

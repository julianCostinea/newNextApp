import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    //on document scroll, add class special to header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTransparent(true);
      }
      if (window.scrollY < 100) {
        setIsTransparent(false);
      }
    });
  }, []);

  return <div className={`${classes.Header} ${isTransparent && classes.transparentHeader}`}>BLABALABAL</div>;
};

export default Header;

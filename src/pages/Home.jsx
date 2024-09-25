import React, { useEffect, useState } from "react";
import "swiper/css";
import "../index.css";
import BannerImage from "../assets/images/BannerImage.svg";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`banner ${isActive ? 'active' : ''}`}>
      <div className="flex items-center justify-between mx-auto max-w-[1200px]">
        <div>
          <h1 className="text-[50px]">Hello world!</h1>
        </div>
        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

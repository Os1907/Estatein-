/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LeftHero from "./LeftHero/LeftHero";
import RightHero from "./RightHero/RightHero";
import BottomHero from "./BottomHero/BottomHero";
import MainSecond from "./MainSecond/MainSecond";
import MainThird from "./MainThird/MainThird";
import ClientStory from "./ClientStory/ClientStory";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section>
        <div className="grid grid-cols-12 overflow-hidden ">
          <RightHero />
          <LeftHero />
          <BottomHero />
        </div>
      </section>
      <MainSecond/>
      <ClientStory/>
      <MainThird/>
    </>
  );
}

import { useEffect } from "react";
import BottomHero from "../Home/BottomHero/BottomHero";
import Models from "./Models/Models";
import TitleService from "./TitleService/TitleService";
import { useLocation } from "react-router-dom";

export default function Service() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <TitleService/>
    <div className="grid  ">
        <BottomHero/>
    </div>
    <Models/>
   
    </>
  )
}

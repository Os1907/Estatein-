import { useEffect } from "react";
import MainThird from "../Home/MainThird/MainThird";
import AboutPro from "./AboutPro/AboutPro";
import Compre from "./Compre/Compre";
import ImgSlider from "./Img/ImgSlider";
import LocationProduct from "./LocationProduct/LocationProduct";
import ProductDisc from "./ProductDisc/ProductDisc";
import { useLocation } from "react-router-dom";

export default function Product() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <LocationProduct/>
    <ImgSlider/>
    <ProductDisc/>
    <AboutPro/>
    <Compre/>
    <MainThird/>
    
    </>
  )
}

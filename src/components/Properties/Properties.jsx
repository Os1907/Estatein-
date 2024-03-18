import { useLocation } from "react-router-dom";
import Discover from "./Discover/Discover";
import MainChild from "./MainProperties/MainChild/MainChild";
import MainProperties from "./MainProperties/MainProperties";
import { useEffect } from "react";
import PropForm from "./PropForm/PropForm";

export default function Properties() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <MainProperties/>
    <MainChild/>
    <Discover/>
    <PropForm/>
    
    
    
    
    
    </>
  )
}

import { useEffect } from "react";
import TitleContact from "./TitleContact/TitleContact";
import { useLocation } from "react-router-dom";
import BottomContact from "./Bottom/BottomContact";
import FormCo from "./FormContact/FormCo";
import OfficeContact from "./OfficeContact/OfficeContact";
import Gallery from "./Gallery/Gallery";

export default function Contact() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
    <TitleContact/>
    <div className="grid">
        <BottomContact/>
    </div>
    <FormCo/>
    <OfficeContact/>
    <Gallery/>
    
    
    </>
  )
}

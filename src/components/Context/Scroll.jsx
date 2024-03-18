import { createContext, useEffect, useState } from "react";



export let scrollSIze =createContext()


// eslint-disable-next-line react/prop-types
export default function Scroll({ children }) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

return (
  
    <scrollSIze.Provider value={{scrollPosition}}>
        {children}
    </scrollSIze.Provider>
);
}
import React, {useCallback, useEffect, useState} from "react";
import Button from "../components/Button";
import HiddenBar from "../components/HiddenBar";


export default function LandingPage({ setLogged }) {
    const [scrollY, setScrollY] = useState(0);
    
    const setScroll = useCallback(() => {
         setScrollY(window.scrollY)
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', setScroll);
        return () => window.removeEventListener('scroll', setScroll);
    }, [setScrollY, setScroll])

    
    
    
    
    /*const [email, setEmail] = useState("exemple@exemple.com");
    const [error, setError] = useState(false);
    
    const handleEmailChange = (e) => {
      // vérifie si l'email contient un @ et un .
      if (e.target.value.includes("@") && e.target.value.includes(".")) {
        setError(false);
      } else {
        setError(true);
      }
      setEmail(e.target.value);
    };*/
  
  
  
  return (
    <div className={`bg-black text-white`}>
      <div
        id={"topLogBar"}
        className={`fixed top-0 left-0 right-0 h-16 bg-gray-600 flex items-center justify-between`}
      >
          <HiddenBar makeItVisible={scrollY > 100} />
          
        <div>
          <h1 className="text-xl text-orange-400 text-center">Binge Watch</h1>
          <p>Where you want, When you want !</p>
        </div>
        

      </div>

      <div id={"invite"} className={`h-screen pt-36 mt-16 border text-center`}>
        <p>bla bla bla</p>
        <p>allé vient du coté obscur on a des cookies</p>
        <input
          className="text-stone-700"
          type="text"
          placeholder="ton email"
          //onChange={handleEmailChange}
        />
        <p>bla bla bla</p>
      </div>

      <div className={`h-screen pt-36 mt-12 border`}>
        <p>bla bla bla</p>
        <p>bla bla bla</p>
      </div>

      <div className={`h-screen pt-36 mt-12 border`}>
        <p>bla bla bla</p>
        <p>bla bla bla</p>
      </div>
    </div>
  );
}
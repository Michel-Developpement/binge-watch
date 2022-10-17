import React from "react";
// import PopCorn from "../assets/images/popcorn.svg";
import NavBar from "../components/NavBar";
import BingeHeader from "../components/BingeHeader";
import {Sliders} from "../components/Sliders";
import CategoryBar from "../components/CategoryBar";
import Button from "../components/Button";



function Home({logout}) {
  return (
    <div>
      <NavBar />
    <div className="bg-dark-navy">
      <BingeNavBar />
      <BingeHeader />
      <CategoryBar /> {/* Arranger la MaxWidth pour éviter le débordement sur la gauche de la page*/}
      <Sliders />
      <Sliders />
      <Sliders />
      <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
        <div onClick={()=>{logout()}}>VERSION TEST : Cliquer pour déconnecter</div>
    </div>
  );
}
export default Home;

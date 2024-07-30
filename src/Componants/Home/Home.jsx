import React from "react";
import avatar from "../../assets/avataaars.svg"

export default function Home() {
  return (
    <>
      <section className="pt-24 text-white px-20 h-screen flex justify-center items-center bg-[#1abc9c]">
        <div>
            <img src={avatar} className="w-2/3 mx-auto" alt="" />
          <h2 className="font-bold text-[50px]">START FRAMWORK</h2>
          <div className="logo flex justify-center items-center my-2 gap-4">
            <h1 className="font-bold text-[40px] bg-white py-px px-10"></h1>
            <i className="fa-solid fa-star"></i>
            <h1 className="font-bold text-[40px] bg-white py-px px-10"></h1>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>    
        </div>
      </section>
    </>
  );
}

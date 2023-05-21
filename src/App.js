import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Header from "./Components/header";
import MainCard from "./Components/main-cards";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

import SmallCard, { SmCH } from "./Components/small-cards";
function App() {
  const [darkMode,setDarkmode]=useState(false);
  const hundleDarkMode=(e)=>{
    setDarkmode(e.target.checked);
  }
  return (
    <>
      <div className={darkMode && "dark"}>
        <div className="text-slate-400 h-screen dark:bg-darkbg-dark">
          {/* header */}
          <Header hundle={hundleDarkMode} />
          <div className="cards container -mt-40">
            <div className="grid md:grid-cols-2 lg:grid-cols-4  sm:grid-cols-1  lg:gap-8 gap-6 pt-5 ">
              <MainCard
                bg=" before:bg-sky-500"
                IconColor="text-facebook"
                RiIcon={<RiArrowUpFill />}
                icon={<AiFillFacebook size={22} />}
              />
              <MainCard
                bg="before:bg-twitter"
                IconColor="text-twitter"
                RiIcon={<RiArrowUpFill />}
                icon={<AiFillTwitterCircle size={22} />}
              />
              <MainCard
                bg="before:bg-gradient-to-r before:from-amber-500 before: to-fushsia-500"
                IconColor="text-fuchsia-700"
                RiIcon={<RiArrowUpFill />}
                icon={<AiFillInstagram size={22} />}
              />
              <MainCard
                bg="before:bg-rose-700"
                IconColor="text-rose-700"
                RiIcon={<RiArrowDownFill />}
                RiColor="text-rose-700"
                icon={<AiFillYoutube size={22} />}
              />
            </div>
            <SmCH/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6">
              {Array(8).fill("").map((el)=>(<SmallCard icon={<AiFillFacebook size={22} color="blue" />} />))
              }
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

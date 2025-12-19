import FirstPage from "@/components/pages/main/FirstPage";
import NavBar from "@/components/ui/NavBar";
import "./styles.css"
import React from "react";
import SecondPage from "@/components/pages/main/SecondPage";
import ThirdPage from "@/components/pages/main/ThirdPage";
import FourthPage from "@/components/pages/main/FourthPage";
import FifthPage from "@/components/pages/main/FifthPage";
import SixthPage from "@/components/pages/main/SixthPage";


export default function Home() {
  return (
      <div id={"main-page"}>
          <NavBar/>
          <div className={"page-scroll"}>

              <FirstPage/>
              <SecondPage/>
              <ThirdPage/>
              <FourthPage/>
              <FifthPage/>
              <SixthPage/>
          </div>
      </div>
  );
}

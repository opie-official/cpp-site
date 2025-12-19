import "./styles/sixth_page.css"
import Button from "@/components/ui/Button";
import React from "react";
import Footer from "@/components/ui/Footer";






export default function SixthPage(){


    return (
        <div id={"main-sixth-page"}>
            <div id={"main-sixth-content"}>
                <p id={"main-sixth-p"}>Start using C++ today!</p>
                <Button text={"Get Started"} path={"/learn"}/>
            </div>
            <Footer/>
        </div>
    )
}
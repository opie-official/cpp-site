import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import FirstPage from "@/components/pages/install/FirstPage";
import SecondPage from "@/components/pages/install/SecondPage";
import Footer from "@/components/ui/Footer";
import {Metadata} from "next";



export const metadata: Metadata={
    title: "Install C++"
}




export default function Install(){



    return (
        <div id={"install-page"}>
            <NavBar/>
            <p id={"install-h"}>Install C++</p>
            <div id={"install-pages"}>
                <FirstPage/>
                <SecondPage/>
                <Footer margin={-10} is top={650} height={33}/>
            </div>
        </div>
    )
}
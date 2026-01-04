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
            <div id={"install-in"}>
                <div id={"install-scroll"}>
                    <div id={"install-in2"}>
                        <p id={"install-h"}>Install C++</p>
                        <div id={"install-pages"}>
                            <FirstPage/>
                            <SecondPage/>
                        </div>
                    </div>
                    <Footer is={false} margin={-10} height={43}/>
                </div>
            </div>
        </div>
    )
}
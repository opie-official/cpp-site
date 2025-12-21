import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import FirstPage from "@/components/pages/install/FirstPage";
import SecondPage from "@/components/pages/install/SecondPage";
import Footer from "@/components/ui/Footer";







export default function Install(){



    return (
        <div id={"install-page"}>
            <NavBar/>
            <p id={"install-h"}>Install C++</p>
            <div id={"install-pages"}>
                <FirstPage/>
                <SecondPage/>
                <Footer margin={-10} is={false} height={40}/>
            </div>
        </div>
    )
}
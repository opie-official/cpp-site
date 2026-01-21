/**
 *
 */
import "./styles/first_page.css"
import Button from "@/components/ui/Button";
import Spot from "@/components/ui/Spot";
import CodeParser from "@/components/ui/CodeParser";




function CodePage(){


    return (
        <div id={"main-first-code"}>
            <pre>
                 <CodeParser text={`#include <iostream>
using namespace std;

int main(int argc, char** argv) {

    cout << "Hello, world!" << endl;
    return 0;
    
}
                            `}/>
            </pre>
        </div>
    )

}



export default function FirstPage() {
    return (
        <div id={"main-first-page"}>
            <Spot x={-35} y={-35} width={120} height={70}/>
            <div id={"main-first-right"}>
                <div id={"main-logo"}>
                    <p id={"main-title"}>C++</p>
                    <p id={"main-subtitle"}>the language in which everything is written</p>
                    {/*<p id={"main-annotation"}>A powerful and fast language that is used to write low-level systems.</p>*/}
                </div>
                <div id={"main-buttons"}>
                    <Button text={"Get started"} path={"/learn"}/>
                    <Button text={"Install"} path={"/install"}/>
                </div>
            </div>
            {/*<div id={"main-first-img"}>*/}
            {/*    <img src={"/cpp.png"}/>*/}

            {/*</div>*/}
            <CodePage/>

        </div>
    )
}
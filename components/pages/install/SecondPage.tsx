import "./styles/second_page.css"
import React from "react";
import Button from "@/components/ui/Button";
import IDE from "@/components/ui/IDE";
import Spot from "@/components/ui/Spot";


interface I_IDE{
    icon: string;
    name: string;
    desc: string;
    children: React.ReactNode;
    only?:string;
}


const ide: I_IDE[]=[
    {
        icon:"/vs.svg",
        name:"Visual Studio",
        desc:"A full-featured integrated development environment (IDE) mainly for Windows. It is widely used for C++, C#, .NET, and Windows application development, offering powerful debugging, profiling, and native integration with MSVC and Windows SDKs.",
        only:"Only on Windows",
        children:<Button classname={"editor-install"} text={`Install Visual Studio`} path={`https://visualstudio.microsoft.com/`}/>
    },
    {
        icon:"/vscd.svg",
        name:"Visual Studio Code",
        desc:"A lightweight, cross-platform code editor with an extension-based ecosystem. It supports many languages and tools via plugins and is popular for web development, scripting, and general-purpose programming rather than heavy IDE workflows.",
        children:[
            <Button classname={"editor-install"} key={1} text={`Install Visual Studio Code`} path={`https://code.visualstudio.com/`}/>,
            // <Button classname={"editor-install"} key={2} text={`Install Extension for C++`} path={``}/>,
        ]
    },
    {
        icon:"/xcode.svg",
        name:"XCode",
        desc:"Apple’s official IDE for macOS, iOS, watchOS, and tvOS development. It includes compilers, SDKs, Interface Builder, and tools tightly integrated with Apple platforms and the Swift and Objective-C languages.",
        only:"Only on MacOS",
        children:<Button classname={"editor-install"} text={`Install XCode`} path={`https://developer.apple.com/xcode/`}/>
    },
    {
        icon:"/qt.svg",
        name:"QtCreator",
        desc:"An IDE focused on Qt application development. It provides strong support for C++ and QML, with integrated UI design tools, cross-platform build systems, and seamless integration with the Qt framework.",
        children:<Button classname={"editor-install"} text={`Install Qt`} path={`https://www.qt.io/`}/>
    },
    {
        icon:"/clion.svg",
        name:"Jetbrains CLion",
        desc:"A cross-platform C/C++ IDE by JetBrains. It emphasizes code analysis, refactoring, and modern CMake-based workflows, with deep understanding of C++ code and strong debugger integration.",
        children:<Button classname={"editor-install"} text={`Install Jetbrains CLion`} path={`https://www.jetbrains.com/clion/`}/>
    },
   

]


export default function SecondPage(){



    return (
        <div id={"install-second-page"}>
            <p id={"install-second-h"}>2. Install Editor</p>
            <div id={"install-second-editors"}>
                {ide.map((el,key)=><IDE {...el} key={key} >{el.children}</IDE>)}
            </div>
            <Spot x={0} y={450} width={100} height={100}/>
            <Spot x={-65} y={-60} width={150} height={100}/>

        </div>
    )
}
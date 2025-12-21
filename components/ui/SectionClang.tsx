import "./styles/sections.css"
import React from "react";
import List from "@/components/ui/List";
import Option from "@/components/ui/Option";
import Code from "@/components/ui/Code";



interface Props{
    visible: boolean;
    setVisible: (i:boolean)=>void
}


export default function SectionClang(props: Props){

    return (
        <div className={"install-section"}>
            <p className={"install-section-h"}>Clang (LLVM)</p>
            <List name={"Windows"}>
                <Option name={"via Winget"}>
                    <Code {...props} classname={"install-code"} text={"winget install LLVM.LLVM"}/>
                </Option>
            </List>
            <List name={"MacOS"}>
                <Option name={"XCode Command Line Tools"}>
                    <Code {...props} classname={"install-code"} text={"xcode-select --install"}/>
                </Option>
            </List>
            <List name={"Linux"}>
                <Option name={"via Apt (Ubuntu/Debian)"}>
                    <Code {...props} classname={"install-code"} text={"sudo apt install clang llvm"}/>
                </Option>
                <Option name={"via Dnf (Fedora)"}>
                    <Code {...props} classname={"install-code"} text={"sudo dnf install clang llvm"}/>
                </Option>
            </List>
        </div>
    )
}
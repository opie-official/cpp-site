import "./styles/sections.css"
import React from "react";
import Code from "@/components/ui/Code";
import Button from "@/components/ui/Button";
import Option from "@/components/ui/Option";
import List from "@/components/ui/List";





interface Props{
    visible: boolean;
    setVisible: (i:boolean)=>void
}



export default function SectionGNU(props: Props){




    return (
        <div className={"install-section"}>
            <p className={"install-section-h"}>GNU Compiler Collection (GCC)</p>
            <List name={"Windows"}>
                <Option name={"via Pacman"}>
                    <Code {...props} classname={"install-code"} text={"pacman -S mingw-w64-x86_64-gcc"}/>
                </Option>
                <Option name={"MinGW"}>
                    <Button text={"Install MinGW"} path={"https://www.mingw-w64.org/"}/>
                </Option>
            </List>
            <List name={"MacOS"}>
                <Option name={"via HomeBrew"}>
                    <Code {...props} classname={"install-code"} text={"brew install gcc"}/>
                </Option>
            </List>
            <List name={"Linux"}>
                <Option name={"via Apt (Ubuntu/Debian)"}>
                    <Code {...props} classname={"install-code"} text={"sudo apt install build-essential"}/>
                </Option>
                <Option name={"via Dnf (Fedora)"}>
                    <Code {...props} classname={"install-code"} text={"sudo apt install build-essential"}/>
                </Option>
                <Option name={"via Pacman (Arch)"}>
                    <Code {...props} classname={"install-code"} text={"sudo pacman -S gccl"}/>
                </Option>
            </List>
        </div>
    )
}
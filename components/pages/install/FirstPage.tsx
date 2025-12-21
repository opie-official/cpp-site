'use client'

import "./styles/first_page.css"
import SectionMSVC from "@/components/ui/SectionMSVC";
import SectionGNU from "@/components/ui/SectionGNU";
import SectionClang from "@/components/ui/SectionClang";
import React, {useState} from "react";
import Spot from "@/components/ui/Spot";
import Alert from "@/components/ui/Alert";






export default function FirstPage(){

    const [visible, setVisible]=useState(false);

    return (
        <div id={"install-first-page"}>
            <Spot x={25} y={150} width={200}
             height={200} rotation={35} />
            <p id={"install-first-h"}>1. Install Compiler</p>
            <div id={"install-first-body"}>
                <SectionMSVC/>
                <SectionGNU visible={visible} setVisible={setVisible}/>
                <SectionClang visible={visible} setVisible={setVisible}/>
            </div>
            <Alert setVisible={setVisible} text={"Text was copied"} visible={visible}/>
        </div>
    )
}
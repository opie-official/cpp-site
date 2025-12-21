import "./styles/sections.css"
import Button from "@/components/ui/Button";


export default function SectionMSVC() {
    return (
        <div className={"install-section"} id={"install-one-msvc"}>
            <p className={"install-section-h"} id={"install-one-msvc-h"}>Microsoft Compiler (MSVC)</p>
            <p className={"install-section-sub"} id={"install-one-msvc-subtitle"}>Only on Windows</p>
            <div id={"install-one-msvc-buttons"}>
                <div id={"install-one-msvc-buttons-buttons"}>
                    <Button id={"install-msvc1"} text={`Install via Visual Studio`} path={`https://visualstudio.microsoft.com/`} />
                    <Button id={"install-msvc2"} text={`Install via Build Tools`} path={`https://visualstudio.microsoft.com/downloads/?q=build+tools`} />
                </div>
                <div id={"install-one-msvc-buttons-img"}>
                    <img src={"/vs.svg"}/>
                </div>
            </div>
        </div>
    )
}
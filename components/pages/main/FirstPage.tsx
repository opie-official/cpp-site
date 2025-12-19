/**
 *
 */
import "./styles/first_page.css"
import Button from "@/components/ui/Button";


export default function FirstPage() {
    return (
        <div id={"main-first-page"}>
            <div className={"pop"}></div>
            <div id={"main-first-right"}>
                <div id={"main-logo"}>
                    <p id={"main-title"}>C++</p>
                    <p id={"main-subtitle"}>the language in which everything is written</p>
                    <p id={"main-annotation"}>A powerful and fast language that is used to write low-level systems.</p>
                </div>
                <div id={"main-buttons"}>
                    <Button   text={"Get started"} path={"/learn"}/>
                    <Button   text={"Install"} path={"/install"}/>
                </div>
            </div>
            <div id={"main-first-img"}>
                <img src={"/cpp.png"}/>
            </div>

        </div>
    )
}
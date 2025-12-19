/**
 *
 */

'use client'
import "./styles/nav_bar.css"
import Link from "next/link";


/**
 *
 */
interface BtnProps{
    text: string;
    path: string
}

/**
 *
 * @param props
 * @constructor
 */
function NavButton(props: BtnProps){
    return (
        <Link href={props.path} className={"nav-button"}>
            <button >
                {props.text}
            </button>
        </Link>

    )

}

/**
 *
 * @constructor
 */
function NavGeneral() {
    return (
        <Link href={"/"} id={"nav-general"}>
            <button>
                <img src={"/cpp_logo.png"}/>
                <p id={"nav-general-p"}>C++26</p>
            </button>
        </Link>
    )
}

/**
 *
 * @constructor
 */
export default function NavBar() {


    const buttons: BtnProps[] =[
        {
            text: "Playground",
            path: "/playground"
        },
        {
            text: "Standard",
            path: "/standard"
        },
        {
            text: "Learn",
            path: "/learn"
        },
        {
            text: "Install",
            path: "/install"
        },

    ]

    return (
        <div id={"nav-bar"}>
            <NavGeneral/>
            <div id={"nav-buttons"}>
                {buttons.map((el,i)=> <NavButton {...el} key={i}/>)}
            </div>
        </div>
    )
}
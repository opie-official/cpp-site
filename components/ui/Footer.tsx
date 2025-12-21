import "./styles/footer.css"
import Link from "next/link";



interface BtnProps{
    title: string;
    path: string;
}


function FooterButton(props: BtnProps){

    return (
        <Link href={props.path} className={"footer-button"}>
            <button>{props.title}</button>
        </Link>
    )
}


interface SectionProps{
    title: string;
    buttons: BtnProps[]
}

function FooterSection(props: SectionProps){


    return (
        <div className={"footer-section"}>
            <p className={"footer-section-title"}>{props.title}</p>
            <div className={"footer-section-buttons"}>
                {props.buttons.map((el,key)=><FooterButton {...el} key={key}/>)}
            </div>
        </div>
    )
}


const section_titles=[
    "Get Started",
    "Editors",
    "Tools",
    "About",
]

const buttons: BtnProps[][]=[
    [
        {
            title:"Playground",
            path:"/playground",
        },
        {
            title:"Standard",
            path:"/",
        },
        {
            title:"Learn",
            path:"/learn",
        },
    ],
    [
        {
            title:"Visual Studio",
            path:"/playground",
        },
        {
            title:"VS Code",
            path:"/",
        },
        {
            title:"Jetbrains CLion",
            path:"/learn",
        },
        {
            title:"QtCreator",
            path:"/learn",
        },
        {
            title:"XCode",
            path:"/learn",
        },
    ],
    [
        {
            title: "Install compiler",
            path: "/playground",
        },
        {
            title: "CMake",
            path: "/",
        },
        {
            title: "GCC",
            path: "/learn",
        },
        {
            title: "MSVC",
            path: "/learn",
        },
        {
            title: "Clang",
            path: "/learn",
        },
    ],
    [
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Community",
            path: "/community",
        },
        {
            title: "Help",
            path: "/help",
        }
    ],

]



interface Props{
    is?: boolean;
    height?:number;
    margin?: number;
}


export default function Footer(props: Props){
    return (
        <footer id={"footer"} style={
            props.is?{
                position: "absolute",
                top: "60%",
                height: props.height && `${props.height}vh !important`
            }:{
              position: "relative",
                marginTop: props.margin?`${props.margin}%`:"5%",
                height: props.height && `${props.height}vh !important`

            }
        }>
            <div id={"footer-sections"}>
                {section_titles.map((el, key)=>{
                    return <FooterSection title={el} buttons={buttons[key]} key={key}/>
                })}
            </div>
            <Link href={"/"} id={"footer-main"}>
                <div id={"footer-main-main"}>
                    <div id={"footer-main-img"}>
                        <img src={"/cpp_logo.png"}/>
                    </div>
                    <p id={"footer-main-p"}>C++</p>
                </div>

            </Link>

        </footer>
    )
}
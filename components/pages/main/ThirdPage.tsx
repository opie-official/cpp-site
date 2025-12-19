import "./styles/third_page.css"
import React from "react";
import Title from "@/components/ui/Title";
import Aspect from "@/components/ui/Aspect";
import CodeExample from "@/components/ui/CodeExample";
import Spot from "@/components/ui/Spot";


interface Aspects{
    text: string;
    title:string;
}

const aspects: Aspects[]=[
    {
        title:"Efficiency",
        text:"C++ compiles to machine code without an interpreter, providing zero abstractions and deterministic memory management. Programs run faster than their counterparts in other languages, especially in tasks with graphics, physics, or big data.​​",
    },
     {
        title:"Versatility",
        text:"The language supports procedural, object-oriented, generalized, and functional programming, allowing you to choose a style for your task. Templates and metaprogramming delegate optimizations to the compiler, increasing flexibility.​​",
    },
     {
        title:"A large community",
        text:"An extensive ecosystem of libraries (STL, Boost) and an active community simplify the development of complex projects. C++ serves as a base for learning other languages.​",
    },

]



export default function ThirdPage(){



    return (
        <div id={"main-third-page"}>
            <Title text={"Why C++"}/>
            <div id={"main-third-aspects"}>
                {aspects.map((el, key)=><Aspect key={key} {...el}/>)}
            </div>
            <CodeExample/>
        </div>
    )
}
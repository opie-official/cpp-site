'use client'


import "./styles/styles.css"

import Button from "@/components/ui/Button";
import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks';
import remarkGfm from "remark-gfm"
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark, darcula, materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Spot from "@/components/ui/Spot";


interface Props {
    lessons: ILesson[];
    lesson: number;
    lesson_: ILesson
}

interface AsideArticles {
    id: string;
    title: string;
}


function Aside(props: { lesson: number }) {
    const [articles, setArticles]=useState<AsideArticles[]>([])
    useEffect(() => {
        const root = document.getElementById("lesson-text") as HTMLDivElement;
        const h = [...root.querySelectorAll("h1")];
        const list: AsideArticles[] = []
        for (let index=0;index<h.length;index++){
            list.push({
                id: h[index].id,
                title: h[index].textContent
            })
            console.log(`id: ${h[index].id}`)
        }
        setArticles(list)
        console.log(`layout ${list}`)
    }, [props.lesson]);

    return (
        <aside id={"lesson-aside"}>
            <div id={"lesson-aside-in"}>
                {articles.map((el, key) => {
                    return <a href={`/learn/lesson?lesson=${props.lesson}#${el.id}`} key={key}>{el.title}</a>
                })}
            </div>
        </aside>
    )
}


export default function LessonPage(props: Props) {

    let len_lessons = props.lessons.length;
    const current = props.lesson;
    let [button1, setButton1] = useState(<Button id={"lesson-bt1"} text={""} path={"/"}/>)
    let [button2, setButton2] = useState(<Button id={"lesson-bt2"} text={""} path={"/"}/>)
    let [isButton1, setIsButton1] = useState(true)
    let [isButton2, setIsButton2] = useState(true)
    const sorted = props.lessons.sort((el1, el2) => el1.id - el2.id);
    let last = sorted[props.lessons.length - 1].id;
    let first = sorted[0].id;

    let prev = sorted.find(el => el.id == current - 1)
    let next = sorted.find(el => el.id == current + 1)

    console.log(props.lessons)


    useEffect(() => {
        console.log(`log ${current} ${first} ${last}`)
        if (prev !== undefined && next !== undefined) {
            setIsButton1(true)
            setIsButton2(true);
            setButton1(<Button id={"lesson-bt1"} text={`${current - 1}: ${prev.title}`}
                               path={`/learn/lesson?lesson=${current - 1}`}/>)
            setButton2(<Button id={"lesson-bt2"} text={`${current + 1}: ${next.title}`}
                               path={`/learn/lesson?lesson=${current + 1}`}/>)
        } else if (prev == undefined && next !== undefined) {
            setIsButton1(true)
            setIsButton2(true);
            setButton1(<Button id={"lesson-bt1"} text={`Go to learn`} path={`/learn/`}/>)
            setButton2(<Button id={"lesson-bt2"} text={`${current + 1}: ${next.title}`}
                               path={`/learn/lesson?lesson=${current + 1}`}/>)
        } else if (prev !== undefined && next === undefined) {
            setIsButton1(true)
            setIsButton2(true);
            setButton1(<Button id={"lesson-bt1"} text={`${current - 1}: ${prev.title}`}
                               path={`/learn/lesson?lesson=${current - 1}`}/>)
            setButton2(<Button id={"lesson-bt2"} text={`Go to learn`} path={`/learn/`}/>)
        } else {
            setIsButton1(true)
            setIsButton2(false)
            setButton1(<Button id={"lesson-bt1"} text={`Go to learn`} path={`/learn/`}/>)
        }


    }, [len_lessons, current, props.lesson_, prev, next]);

    const slugify = (s: string) =>
        s
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-а-яё]/gi, "");

    return (
        <div id={"lesson-content"}>
            <Aside lesson={props.lesson}/>
            <div id={"lesson-main"}>
                <Spot x={0} y={-60} width={100} height={100}/>
                <p id={"lesson-title"}>{props.lesson_.title}</p>
                <div id={"lesson-text"}>
                    <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}
                                   rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                   components={{
                                       //@ts-ignore
                                       code({node, inline, className, children, ...props}) {
                                           const match = /language-(\w+)/.exec(className || '')
                                           return !inline && match ? (
                                               //@ts-ignore
                                               <SyntaxHighlighter style={darcula} language={"cpp"}
                                                                  PreTag="div" {...props}>
                                                   {String(children).replace(/\n$/, '')}
                                               </SyntaxHighlighter>
                                           ) : (
                                               <code className={[className, "code-dark"].join(" ")} {...props}>
                                                   {children}
                                               </code>
                                           )
                                       },
                                       h1: ({ children }) => {
                                           const text = Array.isArray(children) ? children.join("") : String(children ?? "");
                                           const id = slugify(text);
                                           return <h1 id={id}>{children}</h1>;
                                       },
                                   }}

                    >
                        {props.lesson_.text_}
                    </ReactMarkdown>
                </div>
                <div id={"lesson-buttons"}>
                    {isButton1 && button1}
                    {isButton2 && button2}
                </div>
            </div>

        </div>)
}
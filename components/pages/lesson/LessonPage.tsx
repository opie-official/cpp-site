'use client'


import "./styles/styles.css"

import Button from "@/components/ui/Button";
import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks';
import remarkGfm from "remark-gfm"
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import React, {useEffect, useRef, useState} from "react";
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {oneDark, darcula, materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Spot from "@/components/ui/Spot";
import CodeParser from "@/components/ui/CodeParser";
import Link from "next/link";

interface Props {
    lessons: ILesson[];
    lesson: number;
    lesson_: ILesson;
    levels: ILevel[]
}

interface RightAsideProps {
    lesson: number;
    firstBt: boolean;
    secondBt: boolean;
    ref_to: React.RefObject<HTMLDivElement | null>;
}

function RightAside(props: RightAsideProps) {
    const [articles, setArticles] = useState<AsideArticle[]>([]);

    const ref1 = useRef<HTMLButtonElement>(null)
    const ref2 = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const root = document.getElementById("lesson-text") as HTMLDivElement | null;
        if (!root) return;

        const headings: HTMLHeadingElement[] = Array.from(root.querySelectorAll("h1, h2, h3"));

        const list: AsideArticle[] = headings.map((h) => {
            const classname = h.classList[0];
            let level: number = 1;
            if (classname == "lesson-h1") {
                level = 1;
            } else if (classname == "lesson-h2") {
                level = 2;
            } else if (classname == "lesson-h3") {
                level = 3;
            }
            return {
                id: h.id,
                title: h.textContent ?? "",
                isActive: false,
                level: level,
                top: h.offsetTop
            }
        });

        setArticles(list);

    }, [props.lesson]);
    useEffect(() => {
        const bt1 = ref1.current;
        const bt2 = ref2.current;
        if (!bt1 || !bt2) {
            return;
        }
        const main = document.getElementById("lesson-main") as HTMLDivElement;

        function toTop() {
            main.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }

        function toBottom() {
            main.scrollTo({
                top: main.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }

        bt1.addEventListener("click", toTop);
        bt2.addEventListener("click", toBottom);

        return () => {
            bt1.removeEventListener("click", toTop);
            bt2.removeEventListener("click", toBottom);
        }


    }, [props.lesson]);

    return (
        <aside id={"lesson-aside"}>
            <p id={"lesson-aside-p"}>On this page</p>
            <div id={"lesson-aside-scroll"}>
                <div id={"lesson-aside-in"}>
                    {articles.map((el, key) => {
                        return <button
                            style={{
                                marginLeft: `${(el.level - 1) * 10}%`,
                                font: "10pt Roboto Light"
                            }}
                            onClick={() => {
                                const main = props.ref_to.current as HTMLDivElement;
                                main.scrollTo({
                                    top: el.top,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }}
                            key={key}>{el.title}</button>
                    })}
                </div>
            </div>
            <div id={"lesson-aside-buttons"}>
                <button ref={ref1}
                        style={{
                            opacity: props.firstBt ? "1" : "0"
                        }}
                        className={"lesson-aside-bt"}>Scroll to top
                </button>
                <button ref={ref2}
                        style={{
                            opacity: props.secondBt ? "0" : "1"
                        }}
                        className={"lesson-aside-bt"}>Scroll to bottom
                </button>
            </div>
        </aside>
    )
}

interface LeftAsideProps {
    lessons: ILesson[];
    lesson: number;
    levels: ILevel[];
}

function LeftAside(props: LeftAsideProps) {
    const lesson = props.lessons.find(el => el.id == props.lesson)
    const level = props.levels.find(el => el.id == lesson?.level)

    return (
        <div id={"lesson-content-left"}>
            <div id={"lesson-left-info"}>
                <div id={"lesson-left-name"}>
                    {lesson ? <p>Lesson {lesson.id}: {lesson.title}</p> : "Title is undefined"}
                </div>
                <div id={"lesson-left-level"}>
                    {
                        level ? <div id={"lesson-left-level-in"}
                        >
                            <div id={"lesson-left-level-circle"}
                                style={{
                                    background:level.color
                                }}
                            ></div>
                            <p id={"lesson-left-level-p"}>{level.level_name}</p>
                        </div> : "Level is undefined"
                    }
                </div>
            </div>
            <div id={"lesson-left-scroll"}>
                <div id={"lesson-content-left-in"}>
                    {props.lessons.map((el, key) => {
                        return <Link style={{
                            color: props.lesson == el.id ? "var(--blue)" : ""
                        }} key={key} href={`/learn/lesson?lesson=${el.id}`}>{el.title}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}


export default function LessonPage(props: Props) {

    const [firstBt, setFirstBt] = useState(false);
    const [secondBt, setSecondBt] = useState(false);

    const ref = useRef<HTMLDivElement>(null)


    let len_lessons = props.lessons.length;
    const current = props.lesson;
    let [button1, setButton1] = useState(<Button id={"lesson-bt1"} text={""} path={"/"}/>)
    let [button2, setButton2] = useState(<Button id={"lesson-bt2"} text={""} path={"/"}/>)
    let [isButton1, setIsButton1] = useState(true)
    let [isButton2, setIsButton2] = useState(true)
    const sorted = props.lessons.sort((el1, el2) => el1.id - el2.id);

    let prev = sorted.find(el => el.id == current - 1)
    let next = sorted.find(el => el.id == current + 1)


    useEffect(() => {

        const el = ref.current;
        if (!el) {
            return;
        }

        function Scroll(e: Event) {
            const scroll = (e.target as HTMLDivElement).scrollTop;
            const height = (e.target as HTMLDivElement).scrollHeight - (e.target as HTMLDivElement).clientHeight;
            if (scroll >= 80) {
                setFirstBt(true);
            } else {
                setFirstBt(false);
            }
            if (height - scroll < 80) {
                setSecondBt(true);
            } else {
                setSecondBt(false)
            }
        }

        el.addEventListener("scroll", Scroll);

        return () => el.removeEventListener("scroll", Scroll);

    }, [props.lesson]);


    useEffect(() => {
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
            <LeftAside {...props}/>
            <div ref={ref} id={"lesson-main"}>
                <Spot x={0} y={-60} width={100} height={100}/>
                <p id={"lesson-title"}>{props.lesson_.title}</p>
                <div id={"lesson-text"}>
                    <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}
                                   rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                   components={{

                                       img(e) {
                                           return <img src={e.src}/>
                                       },

                                       pre(e) {
                                           const codeEl = Array.isArray(e.children) ? e.children[0] : e.children;

                                           const text =
                                               typeof codeEl === "string"
                                                   ? codeEl
                                                   : // @ts-ignore
                                                   (codeEl?.props?.children?.toString?.() ?? "");

                                           return (<div style={{
                                               background: "#090909",
                                               padding: "1% 3%",
                                               borderRadius: "20px"
                                           }}>
                                               <CodeParser text={text}/>
                                           </div>)
                                       },
                                       //@ts-ignore
                                       code({node, inline, className, children, ...props}) {
                                           // console.log(`inline ${inline}`)
                                           return (<code
                                           >{children?.toString() ?? ""}</code>)

                                       },
                                       h1: ({children}) => {
                                           const text = Array.isArray(children) ? children.join("") : String(children ?? "");
                                           const id = slugify(text);
                                           return <h1 className={"lesson-h1"} id={id}>{children}</h1>;
                                       },
                                       h2: ({children}) => {
                                           const text = Array.isArray(children) ? children.join("") : String(children ?? "");
                                           const id = slugify(text);
                                           return <h2 className={"lesson-h2"} id={id}>{children}</h2>;
                                       },
                                       h3: ({children}) => {
                                           const text = Array.isArray(children) ? children.join("") : String(children ?? "");
                                           const id = slugify(text);
                                           return <h3 className={"lesson-h3"} id={id}>{children}</h3>;
                                       },
                                       p(e) {
                                           return <p
                                               style={{
                                                   margin: "3% 0"
                                               }}
                                           >{e.children}</p>
                                       }
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
            <RightAside ref_to={ref} firstBt={firstBt} secondBt={secondBt} lesson={props.lesson}/>

        </div>)
}
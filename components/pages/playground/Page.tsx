"use client"

import "./styles/page.css"
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import CodeParser from "@/components/ui/CodeParser";


export default function Page() {

    const [text, setText] = useState("")
    const [am, setAm] = useState(1)

    const sizerRef = useRef<HTMLDivElement | null>(null);
    const rawRef = useRef<HTMLTextAreaElement | null>(null);
    const lightRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const sizer = sizerRef.current;
        const raw = rawRef.current;
        const light = lightRef.current;
        if (!sizer || !raw || !light) return;

        const apply = () => {
            const h = sizer.scrollHeight;
            raw.style.height = `${h}px`;
            light.style.height = `${h}px`;
        };

        apply();

        const ro = new ResizeObserver(apply);
        ro.observe(sizer);

        return () => ro.disconnect();
    }, [text]);

    useLayoutEffect(() => {

        const amount = text.split("\n").length;
        setAm(amount);

    }, [text]);


    function genRows() {
        const rows: number[] = [];
        for (let i = 1; i <= am; i++) {
            rows.push(i);
        }

        return rows.map((el, key) => {
            return <p key={key}>{el}</p>
        })
    }

    const ref = useRef<HTMLTextAreaElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)

    function select() {
        ref.current?.select()
    }

    useEffect(() => {
        ref2.current?.addEventListener("click", select)
        return () => ref2.current?.removeEventListener("click", select)
    }, []);

    return (
        <div id={"playground-code"}>
            <div id={"playground-in"}>
                <div id={"playground-flex"}>
                    <div id={"playground-rows"}>{genRows()}</div>
                    <div id={"playground-text"}>
                        <div id="playground-sizer">{text + "\n"}</div>
                        <div id={"playground-light"} ref={ref2}>
                            <div className={"code-layer"}>
                                <CodeParser text={text + "\n"}/>
                            </div>
                        </div>
                        <textarea ref={ref}
                                  id={"playground-raw"}
                                  value={text}
                                  onInput={(e) => setText(e.currentTarget.value)}
                                  spellCheck={false}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
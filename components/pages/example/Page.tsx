'use client'
import "./styles/page.css"
import React from "react";
import Code from "@/components/ui/Code";
import Alert from "@/components/ui/Alert";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import Button from "@/components/ui/Button";


interface Props {
    text: string;
    id:string;
    // setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>;
    rows: IExample[]

}


export default function Page(props: Props) {
    const {rows, id} = props;
    const next = rows.find(el => el.id == +id + 1);
    const prev = rows.find(el => el.id == +id - 1);

    const [visible, setVisible] = React.useState(false);
    const slugify = (s: string) =>
        s
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-а-яё]/gi, "");
    return (
        <div id={"example-main"}>
            <div id={"example-in"}>
                <ReactMarkdown
                    remarkPlugins={[remarkBreaks, remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}

                    components={{
                        //@ts-ignore
                        code: ({node, inline, className, children, ...props}) => {
                            return (
                                <Code isCpp visible={visible} setVisible={setVisible}
                                      text={children ? children.toString() : ""}/>
                            )
                        },
                        h1: ({children}) => {
                            const text = Array.isArray(children) ? children.join("") : String(children ?? "");
                            const id = slugify(text);
                            return <h1 id={id}
                                       style={{
                                           fontFamily: "Roboto medium, serif",
                                           color: "white",
                                           margin: "4% 0",
                                       }}
                            >{children}</h1>
                        }
                    }}

                >
                    {props.text}
                </ReactMarkdown>
            </div>
            <Alert text={"Code was copied"} setVisible={setVisible} visible={visible}/>
            {/*<Footer is={false}/>*/}
            <div id={"example-buttons"}>
                {(rows.length > 1) ?
                    <>
                        <Button text={prev ? `${prev.title}` : "Go to examples"}
                                path={prev ? `/examples/example?example=${prev.id}` : `/examples`}/>
                        <Button text={next ? `${next.title}` : "Go to examples"}
                                path={next ? `/examples/example?example=${next.id}` : `/examples`}/>
                    </>
                    :
                    <Button text={"Go to examples"} path={`/examples`}/>
                }
            </div>
        </div>
    )
}
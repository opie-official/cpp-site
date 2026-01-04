'use client'

import "./styles/code_example.css"
import {ReactNode, useRef, useState} from "react";
import {motion} from "framer-motion"

//@ts-ignore
const code = [
    `#include <iostream>

int main() {
  
    std::string user_name = "user"; 
    std::cout << "Hello, " << user_name << "!" << std::endl;
    return 0;
    
}
`,
    `#include <iostream>
#include <future>
#include <thread>
#include <chrono>

int main() {
    int count = 10;
    auto f1 = std::async(std::launch::async, [&count] {
        for (int i = 0; i < count; ++i) {
            std::cout << "1";
            std::this_thread::sleep_for(std::chrono::milliseconds(1));
        }
    });
    auto f2 = std::async(std::launch::async, [&count] {
        for (int i = 0; i < count; ++i) {
            std::cout << "2";
            std::this_thread::sleep_for(std::chrono::milliseconds(1));
        }
    });
    f1.get();
    f2.get();
    std::cout << std::endl;
    return 0;
}
`,
    `#include <iostream>

class Car {
private:
    int speed;
public:
    void setSpeed(int s) { speed = s; }
    int getSpeed() const { return speed; }
};

int main() {
    Car myCar;
    myCar.setSpeed(100);
    std::cout << "Speed: " << myCar.getSpeed() << " km/h" << std::endl;
    return 0;
}
`,
    `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int sum = 0;
    std::for_each(numbers.begin(), numbers.end(), [&sum](int x) {
        sum += x;
    });
    std::cout << "Sum = " << sum << std::endl;
    return 0;
}
`,
    `#include <iostream>

#if defined(_WIN32) || defined(_WIN64)
    #define PLATFORM_NAME "Windows"
#elif defined(__linux__)
    #define PLATFORM_NAME "Linux"
#elif defined(__APPLE__)
    #define PLATFORM_NAME "macOS"
#else
    #define PLATFORM_NAME "Unknown platform"
#endif

int main() {
    std::cout << "Running on " << PLATFORM_NAME << std::endl;
    return 0;
}
`,
    `#include <cassert>

int add(int a, int b) {
    return a + b;
}

int main() {
    assert(add(2, 3) == 5);
    assert(add(-1, 1) == 0);
    std::cout << "All tests passed!" << std::endl;
    return 0;
}
`,
    `#include <avr/io.h> 
#include <util/delay.h> 

int main() {

  DDRB |= (1 << PB5);

  while (1) {
    PORTB |= (1 << PB5);
    _delay_ms(1000); 

    PORTB &= ~(1 << PB5);
    _delay_ms(1000); 
  }

  return 0;
}
    `,
]

const names = [
    "Simple",
    "Asynchronous",
    "Object Oriented",
    "Functional",
    "Cross-platform",
    "Tests",
    "Electronics",
]


interface Props {
    children: ReactNode
}


const regex = /[\n\t\r\s]|#\s*\w+|(?<=#\s*\w+\s*)(<.+?>|".+?")|\d+(\.\d+)?|'.*?'|".*?"|[+\-*\/%=:;.,^<>!~|&()\[\]{}?]+|\w+/gm;


const enum Typ {
    KW,
    ID,
    OP,
    STR,
    NUM,
    OTHER,
    CLASS,
    FN,
    LIB,
    PREPROC,
    ENDL
}

const colors = [
    {
        val: `#FA8C42`,
        typ: Typ.KW
    },
    {
        val: `white`,
        typ: Typ.ID
    },
    {
        val: `white`,
        typ: Typ.OP
    },
    {
        val: `#409759`,
        typ: Typ.STR
    },
    {
        val: `#007CE8`,
        typ: Typ.NUM
    },
    {
        val: `white`,
        typ: Typ.OTHER
    },
    {
        val: `#DBAFFF`,
        typ: Typ.CLASS
    },
    {
        val: `#27A5FF`,
        typ: Typ.FN
    },
    {
        val: `#2CA64F`,
        typ: Typ.LIB
    },
    {
        val: `#A69C15`,
        typ: Typ.PREPROC
    },
    {
        val: `white`,
        typ: Typ.ENDL
    },
]

interface Lexeme {
    typ: number;
    val: string;
}

const kw = [
    "class",
    "int",
    "float",
    "double",
    "short",
    "long",
    "auto",
    "return",
    "for",
    "while",
    "if",
    "else",
    "switch",
    "case",
    "default",
    "continue",
    "break",
    "const",
    "public",
    "protected",
    "private",
    "final",
]

interface Token {
    val: string;
    start: number;
    length: number;
}

const word = /[A-Za-z_]\w+/gm
const oper = /[+\-*\/%=:;.,^<>!~|&()\[\]{}?]+/gm
const lib = /<.+?>|".+?"/gm
const preproc = /#\s*\w+/gm
const str = /".*?"|'.*?'/gm
const num = /\d+(\.\d+)?/gm
const spec = /[\s\t\r]/gm


function CodeParser(props: Props) {
    const matches = props.children?.toString().matchAll(regex)
    const res = [...matches as RegExpStringIterator<RegExpExecArray>];
    const tokens: Token[] = []
    for (const i of res) {
        tokens.push({
            val: i[0],
            start: i.index,
            length: i[0].length
        })
    }
    console.log(JSON.stringify(tokens.map(el => el.val)))
    const lexemes: Lexeme[] = []

    for (const token of tokens) {

        if (preproc.test(token.val)) {
            lexemes.push({
                val: token.val,
                typ: Typ.PREPROC
            })
        } else if (lib.test(token.val)) {
            lexemes.push({
                val: token.val,
                typ: Typ.LIB
            })
        } else if (word.test(token.val)) {
            if (kw.includes(token.val)) {
                lexemes.push({
                    val: token.val,
                    typ: Typ.KW
                })
            } else {

                lexemes.push({
                    val: token.val,
                    typ: Typ.ID
                })
            }
            // } else if ("+-*/%=:;.,^<>!~|&()[]{}?".includes(token.val)) {
        } else if (oper.test(token.val) || "+-*/%=:;.,^<>!~|&()[]{}?".includes(token.val)) {
            lexemes.push({
                typ: Typ.OP,
                val: token.val
            })

        } else if (str.test(token.val)) {
            lexemes.push({
                typ: Typ.STR,
                val: token.val
            })
        } else if (num.test(token.val)) {
            lexemes.push({
                typ: Typ.NUM,
                val: token.val
            })

        } else if (spec.test(token.val)) {
            if (token.val == "\n") {
                lexemes.push({
                    typ: Typ.ENDL,
                    val: token.val
                })
            } else {
                lexemes.push({
                    typ: Typ.OTHER,
                    val: token.val
                })
            }
        } else if ("\n" == token.val) {
            lexemes.push({
                val: "\n",
                typ: Typ.ENDL
            })
        } else if (token.val == " ") {
            lexemes.push({
                val: " ",
                typ: Typ.OTHER
            })
        }
    }

    return (
        <div id={"code-parser"}>
            {
                lexemes.map((el, key) => {
                    if (el.typ == Typ.ENDL) {
                        return <br key={key}/>
                    } else {
                        return <span key={key} style={{
                            color: +el.typ < colors.length ?
                                colors[+el.typ].val : "white",
                            font: "10pt Jetbrains Mono",
                            whiteSpace: "pre"
                        }}>{el.val}</span>
                    }
                })
            }
        </div>
    )

}

interface LineProps {
    cell: number;
    width: number;
    left: number;
}

function Line(props: LineProps) {

    const [prevWidth, setPrevWidth] = useState(0);
    const [prevLeft, setPrevLeft] = useState(0);

    return (
        <motion.div
            style={{
                position: "absolute",
                height: "100%",
            }}
            initial={false}
            animate={{
                left: [prevLeft, props.left],
                width: [prevWidth, props.width]
            }}
            onAnimationComplete={() => {
                setPrevWidth(props.width);
                setPrevLeft(props.left);
            }}

        >
            <div id={"code-example-line"}
                 style={{
                     width: "100%",
                     height: "100%",
                     // background: "white"
                     borderBottom: "1px solid white"
                 }}
            />
        </motion.div>

    )
}


export default function CodeExample() {


    const [cell, setCell] = useState(0);
    const refs = useRef<(HTMLButtonElement | null)[]>([]);

    const [opac, setOpac] = useState(2);
    const opacity=0.4;

    const cur = refs.current[cell];

    const ref1=useRef<HTMLButtonElement>(null)

    return (<div id={"code-example"}>
        <div id={"code-example-label"}>
            {names.map((el, key) => {
                return <button
                    key={key}
                    onClick={() => {setCell(key); setOpac(0)}}
                    ref={el => {
                        if (key==0){
                            ref1.current=el
                        }
                        refs.current[key] = el;
                    }}
                >
                    {el}
                </button>
            })}
            <Line cell={cell} width={cur?.offsetWidth??50}
                  left={cur?.offsetLeft??0}/>
        </div>
        <div id={"code-example-scroll"}>
            <motion.div
                initial={false}
                animate={{
                    opacity: opac == 0 ? [1, opacity] : opac == 1 ? [opacity, 1] : [1, 1]
                }}
                transition={{
                    duration: (opac==0? 0.25: 0.3),
                    delay: opac==1? 0.3:0
                }}
                onAnimationComplete={() => {
                    if (opac == 0) {
                        setOpac(1)
                    }else if (opac==1) {
                        setOpac(2);
                    }
                }}
            >
                <CodeParser>{code[cell]}</CodeParser>
            </motion.div>
        </div>
    </div>)
}



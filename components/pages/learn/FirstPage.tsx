'use client'
import "./styles/first_page.css"
import CodeParser from "@/components/ui/CodeParser";


interface StartProps {
    chapters: number;
    href: string;
    last: number;
}


interface Props {
    chapters: number;
    last: number;
}


function StartMenu(props: StartProps) {
    return (
        <div id={"learn-start-menu"}>
            <p id={"learn-start-title"}>Start learning C++</p>
            <p id={"learn-start-subtitle"}>{props.chapters} chapters</p>
            <div id={"learn-start-continue"}>
                {
                    props.last>=0 ?
                        <button
                            style={{
                                background :"transparent",
                                color: "var(--subtitle)",
                                font: "14pt Roboto"
                            }}

                            onClick={()=>window.location.href= props.href} id={"learn-start-has"}>Continue with lesson {props.last}</button>
                        :
                        "There`s no progress"
                }
            </div>
            <div id={"learn-start-menu-bg"}></div>
        </div>
    )
}


interface InfoProps {
    text: string;
}

function Info(props: InfoProps) {
    return (
        <div className={"learn-first-info"}>
            <div className={"learn-first-info-circle"}></div>
            <p className={"learn-first-info-p"}>{props.text}</p>
        </div>
    )
}


const texts = [
    "Your progress will be saved.",
    "At the end of the chapters there will be tests."
]


export default function FirstPage(props: Props) {
    return (
        <div id={"learn-first-page"}>
            <div id={"learn-start"}>
                <div id={"learn-code"}>
                    <div id={"learn-code-filter"}></div>
                    <pre style={{zIndex:10}}>
                     <CodeParser text={`
#include <atomic>template<typename T>class SPSCQueue {public: explicit 
SPSCQueue(size_t size): size_(size), buffer_(new T[size]) {}~SPSCQueue() 
{ delete[] buffer_;}bool push(const T& value) {auto next = (head_ + 1) % size_;
if (next == tail_.load(std::memory_order_acquire))return false;
buffer_[head_] = value;head_ = next;return true;}bool pop(T& value) 
{auto tail = tail_.load(std::memory_order_relaxed);if (tail == head_)  
return false;value = buffer_[tail];tail_.store((tail + 1) % size_, std::memory_order_release);
return true;}private:size_t size_;T* buffer_;size_t head_ = 0;
std::atomic<size_t> tail_{0};};
                    `}/>
                    </pre>
                    <div id={"learn-code-filter2"}></div>
                </div>
                <StartMenu href={`/learn/lesson?lesson=${props.last}`} last={props.last} chapters={props.chapters}/>
            </div>
            <div id={"learn-first-info"}>
                {texts.map((el, key) => <Info text={el} key={key}/>)}
            </div>
        </div>
    )
}
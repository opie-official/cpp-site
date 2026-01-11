

interface Props {
    text: string
}

const kw = [
    "auto",
    "int",
    "bool",
    "double",
    "short",
    "long",
    "for",
    "if",
    "else",
    "while",
    "return",
    "co_yield",
    "co_return",
    "co_await",
    "char",
    "char32_t",
    "char8_t",
    "char16_t",
    "wchar_t",
    "nullptr",
    "noexcept",
    "false",
    "true",
    "struct",
    "enum",
    "class",
    "final",
    "public",
    "private",
    "protected",
    "this",
    "try",
    "catch",
    "finally",
    "throw",
    "import",
    "export",
    "t_thread",
    "new",
    "delete",
    "const",
    "constexpr",
    "constinit",
    "consteval",
    "",
]
type RuleName = "preproc" | "lib" | "string" | "numb" | "oper" | "id"|"spec" | "comment";

type Rule = {
    name: RuleName;
    reg: RegExp;
    color: string;
    priority: number;
};

const rules: Rule[] = [
    {name: "preproc", reg: /#\s*\w*/gm, color: "#B3AE60", priority: 0},
    {name: "string", reg: /"([^"\\]|\\.)*"?|'([^'\\]|\\.)*'?/gm, color: "#6AAB73", priority: 1},
    {name: "lib", reg: /<[^ ]*?>/gm, color: "#6AAB73", priority: 2},
    {name: "numb", reg: /\b\d+(\.\d+)?\b/gm, color: "#2AACB8", priority: 3},
    {name: "oper", reg: /[+\-*/%^~&|<>.,:;!()\[\]{}=]/gm, color: "#BCBEC4", priority: 4},
    {name: "id", reg: /\b[A-Za-z_]\w*\b/gm, color: "#BCBEC4", priority: 5},
    {name: "spec", reg: /[\n\s\r\t]/gm, color: "#BCBEC4", priority: 5},
    {name: "comment", reg: /\/\/.*?\n|\/*.*\*\//gm, color: "#777777", priority: 5},
];
type Token = {
    start: number;
    end: number;
    val: string;
    rule: RuleName;
    priority: number;
};




function lex(text: string): Token[] {
    const candidates: Token[] = [];

    for (const r of rules) {
        for (const m of text.matchAll(r.reg)) {
            const start = m.index ?? 0;
            const val = m[0];
            candidates.push({
                start,
                end: start + val.length,
                val,
                rule: r.name,
                priority: r.priority,
            });
        }
    }

    candidates.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        if (a.priority !== b.priority) return a.priority - b.priority;
        return (b.end - b.start) - (a.end - a.start);
    });

    const picked: Token[] = [];
    for (const t of candidates) {
        const last = picked[picked.length - 1];
        if (!last || t.start >= last.end) {
            picked.push(t);
            continue;
        }

        if (t.start === last.start && t.priority < last.priority) {
            picked[picked.length - 1] = t;
        }
    }

    return picked;
}

type Segment =
    | { kind: "plain"; text: string }
    | { kind: "tok"; text: string; color: string; rule: RuleName };

function toSegments(text: string, tokens: Token[]): Segment[] {
    const segs: Segment[] = [];
    let pos = 0;

    for (const t of tokens) {
        if (t.start > pos) {
            segs.push({kind: "plain", text: text.slice(pos, t.start)});
        }
        const color = rules.find(r => r.name === t.rule)!.color;
        segs.push({kind: "tok", text: t.val, color, rule: t.rule});
        pos = t.end;
    }

    if (pos < text.length) {
        segs.push({kind: "plain", text: text.slice(pos)});
    }

    return segs;
}

const kwSet = new Set(kw);
const KW_COLOR = "#CF8E6D";


const show = (t: string) => t.replace(/ /g, "\u00A0");

function renderSegments(segs: Segment[]) {
    return segs.map((s, idx) => {
        if (s.kind === "plain") return <span key={idx}>{show(s.text)}</span>;

        let color = s.color;
        if (s.rule === "id" && kwSet.has(s.text)) color = KW_COLOR;

        return (
            <span key={idx} className="code-seg" style={{ color }}>
        {show(s.text)}
      </span>
        );
    });
}
export default function CodeParser({text}: Props) {
    const tokens = lex(text);
    const segs = toSegments(text, tokens);

    return (
        <div className={"code-layer"}>
            <>{renderSegments(segs)}</>
        </div>
    );
}

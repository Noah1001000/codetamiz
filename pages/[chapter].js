import { useEffect } from "react";
import marked from "marked";
import Sidebar from "../comps/Sidebar";
import chapters from "../data/chapters";
import Link from "next/link";
import beautify from "js-beautify";

import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import "highlight.js/styles/gruvbox-dark.css";

// import createDOMPurify from "dompurify";
// import { JSDOM } from "jsdom";
// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);

export const getStaticPaths = async () => {
    const res = chapters.map((chapter) => {
        return {
            params: { chapter: chapter.slug },
        };
    });

    return {
        paths: res,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const chapter = context.params.chapter;
    const target = chapters.filter((item) => {
        return item.slug == chapter ? true : false;
    })[0];
    const content = marked(target.content);

    return {
        props: { content, target },
    };
};

const Content = ({ content, target }) => {
    useEffect(() => {
        document.querySelectorAll("pre code").forEach((item) => {
            item.innerHTML = beautify(item.innerHTML);
        });

        hljs.registerLanguage("java", java);
        document.querySelectorAll("pre code").forEach((item) => {
            hljs.highlightBlock(item);
        });
    });

    return (
        <div className="container">
            <div className="row align-center">
                <div className="col-12 col-md-9">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    ></div>
                    <div className="d-flex justify-content-between mt-5">
                        <div>
                            {target.next && (
                                <Link href={"/" + target.next.slug}>
                                    <a className="mx-2 py-3 px-4 btn btn-outline-primary">
                                        فصل بعد
                                        <br />
                                        {target.next.name}
                                    </a>
                                </Link>
                            )}
                        </div>
                        <div>
                            {target.prev && (
                                <Link href={"/" + target.prev.slug}>
                                    <a className="mx-2 py-3 px-4 btn btn-outline-primary">
                                        فصل قبل
                                        <br />
                                        {target.prev.name}
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Content;

import { useState, useEffect } from "react";
import marked from "marked";
import Sidebar from "../comps/Sidebar";
import chapters from "../data/chapters";
import Link from "next/link";
import beautify from "js-beautify";
import ScrollBtn from "../comps/ScrollBtn";
import MiniSidebar from "../comps/MiniSidebar";

import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
import "highlight.js/styles/gruvbox-dark.css";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    document.querySelector("#content").innerHTML = content;
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
      <div
        onClick={handleClick}
        className="position-fixed d-block d-md-none mx-2"
        style={{
          top: "60px",
          right: "0",
        }}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30px"
            height="30px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30px"
            height="30px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      <div
        className="row align-center"
        style={{ paddingBottom: "60px", marginRight: "30px" }}
      >
        <div className="col-12 col-md-9">
          <div id="content"></div>
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
        <MiniSidebar isOpen={isOpen} handleClick={handleClick} />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Content;

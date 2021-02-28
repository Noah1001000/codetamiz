import { useState } from "react";
import Link from "next/link";
import chapters from "../data/chapters";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) => {
        setIsOpen(!isOpen);
    };

    const regularNav = () => (
        <div
            className={`text-right col-md-3 position-fixed overflow-auto d-none d-md-inline`}
            style={{
                top: "120px",
                right: "20px",
                bottom: "0px",
                width: "280px",
            }}
        >
            <div>
                <h5 className="my-3">فصل های ترجمه شده</h5>
                {chapters.map((chapter) => {
                    return (
                        <Link href={`/${chapter.slug}`}>
                            <a
                                className="d-block shadow-sm p-2"
                                style={{ fontSize: "18px" }}
                            >
                                {chapter.name}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );

    const toggleNav = () => (
        <div className="flex text-right" style={{ width: "100%" }}>
            <div className="d-fixed" style={{ top: "0px" }}></div>
            <div>buttofsdfasdfsdfasdfsdfsdffn</div>
            <div>menu</div>
        </div>
    );

    const newSidebar = () => (
        <div className="d-flex flex-column col-md-3">
            <div
                className="position-fixed"
                onClick={handleClick}
                style={{
                    zIndex: "2",
                    top: "84px",
                    right: "0px",
                }}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="36"
                        height="36"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="36"
                        height="36"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </div>
            <div
                className={`position-fixed text-right ${!isOpen && "d-none"}`}
                style={{
                    minWidth: "200px",
                    width: "25%",
                    top: "120px",
                    right: "0px",
                    bottom: "0px",
                    backgroundColor: "white",
                }}
            >
                <div className={!isOpen && "d-none"}>
                    {chapters.map((chapter) => {
                        return (
                            <Link href={`/${chapter.slug}`}>
                                <a
                                    className="d-block shadow-sm p-2"
                                    style={{ fontSize: "18px" }}
                                >
                                    {chapter.name}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
    return <>{regularNav()}</>;
};

export default Sidebar;

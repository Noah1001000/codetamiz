import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="navbar navbar-light justify-content-between container pb-5">
            <div>
                <a
                    href="https://github.com/Noah1001000/clean-code-persian"
                    className="btn btn-light"
                >
                    <img
                        src="/github-logo.svg"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                    />
                </a>
                <Link href="/">
                    <a className="btn btn-light">لیست فصل های ترجمه شده</a>
                </Link>
            </div>
            <div style={{ fontSize: "30px" }}>
                <img
                    src="/shining.svg"
                    style={{ width: "30px", height: "30px" }}
                />
                کد تمیز
            </div>
        </div>
    );
}

export default Navbar;

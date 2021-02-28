import axios from "axios";
import Link from "next/link";
import chapters from "../data/chapters";

const Chapters = () => {
    return (
        <div className="conteiner d-flex flex-column  align-items-center pt-4">
            {chapters.map((chapter) => {
                return (
                    <div
                        key={chapter.slug}
                        className="d-flex justify-content-end align-items-center shadow-sm p-3 text-right"
                        style={{
                            width: "50%",
                            backgroundColor: "#ededed",
                        }}
                    >
                        <Link href={"/" + chapter.slug}>
                            <a>{chapter.name}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Chapters;

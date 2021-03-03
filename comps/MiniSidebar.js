import Link from "next/link";
import chapters from "../data/chapters";

const MiniSidebar = ({ isOpen, handleClick }) => {
  return (
    <>
      <div
        className={`text-right  col-md-3 position-fixed overflow-auto d-inline d-md-none bg-white ${
          isOpen ? "sidebar--active" : "sidebar--unactive"
        }`}
        style={{
          width: "60%",
          top: "90px",
          bottom: "0",
          transition: "1s",
          zIndex: "2",
        }}
      >
        <h5 className="my-3">فصل های ترجمه شده</h5>
        {chapters.map((chapter) => {
          return (
            <Link href={`/${chapter.slug}`}>
              <a
                onClick={handleClick}
                className="side-item d-block shadow-sm p-2"
                style={{ fontSize: "18px" }}
              >
                {chapter.name}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MiniSidebar;

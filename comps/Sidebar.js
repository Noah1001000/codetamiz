import Link from "next/link";
import chapters from "../data/chapters";

const Sidebar = () => {
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
                className="side-item d-block shadow-sm p-2"
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
  return <>{regularNav()}</>;
};

export default Sidebar;

import { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const isBrowser = typeof window !== `undefined`;

const ScrollBtn = () => {
  const [canDown, setCanDown] = useState(true);

  const handleScroll = (e) => {};

  const moveToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const moveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const low = -1 * document.body.scrollHeight + 1000;
      const up = -200;
      if (currPos.y < up && currPos.y > low) {
        setCanDown(true);
      } else if (currPos.y < low) {
        setCanDown(false);
      }
    },
    [canDown]
  );

  useEffect(() => {
    console.log(isBrowser);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`btn position-fixed bg-primary text-white`}
      style={{
        bottom: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "50%",
      }}
    >
      {canDown ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30"
            height="30"
            onClick={moveToBottom}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30"
            height="30"
            onClick={moveToTop}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollBtn;

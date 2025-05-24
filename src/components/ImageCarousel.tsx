import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

export default function ImageCarousel() {
  const [buckets, setBuckets] = useState([
    [
      { id: 1, text: "something", color: "green" },
      { id: 2, text: "adfasdfasdfsaother else", color: "plum" },
      { id: 3, text: "another else", color: "blue" },
      { id: 4, text: "something else", color: "lightblue" },
    ],
    [],
    [],
  ]);

  const handleNext = () => {
    startTransition(() => {
      requestAnimationFrame(() => {
        setBuckets((c) => {
          if (c[0].length === 0 && c[1].length === 0) {
            return c;
          }

          const first = [...c[0].slice(0, -1)];

          let second: number[] = [];
          if (c[0].length > 0) {
            second = [...c[0].slice(-1)];
          }

          const third = [...c[2]];
          if (c[1].length > 0) {
            third.push(c[1][0]);
          }

          return [first, second, third];
        });
      });
    });
  };

  const handlePrev = () => {
    startTransition(() => {
      requestAnimationFrame(() => {
        setBuckets((c) => {
          if (c[1].length === 0 && c[2].length === 0) {
            return c;
          }

          const first = [...c[0]];
          if (c[1].length > 0) {
            first.push(c[1][0]);
          }
          const second = [...c[2].slice(-1)];
          const third = [...c[2].slice(0, -1)];
          return [first, second, third];
        });
      });
    });
  };

  return (
    <>
      <div className="grid gallery">
        {buckets.map((bucket, i) => {
          return (
            <div
              className={i == 1 ? "" : "side-stack-container"}
              key={`bucket-${i}`}
            >
              {bucket.map((n, j) => {
                // console.log(`bucket:${i} ${JSON.stringify(n)}`);
                return (
                  <ViewTransition name={`name-${n.id}`}>
                    <div
                      className={i === 1 ? "center-stack" : "side-stack"}
                      style={{ backgroundColor: n.color, zIndex: j }}
                    >
                      {/* <p>{n.text}</p> */}
                    </div>
                  </ViewTransition>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="" role="group">
        <button className="outline" onClick={handlePrev}>
          Prev
        </button>
        <button className="" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

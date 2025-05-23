import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

const Shuffle = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const shuffle = <T,>(arr: T[]): T[] =>
    arr.toSorted(() => Math.random() - 0.5);

  const shuffleHandler = () => {
    startTransition(() => {
      setNumbers((curr) => shuffle(curr));
    });
  };

  return (
    <>
      <button onClick={shuffleHandler}>Shuffle</button>
      <section className="">
        {numbers.map((n) => {
          return (
            <ViewTransition name={`view-transition-${n}`} key={n}>
              <article className="number">{n}</article>
            </ViewTransition>
          );
        })}
      </section>
    </>
  );
};

export default Shuffle;

import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

type Slot = "one" | "two" | "three";

export default function ImageCarousel() {
  const [stacks, setStacks] = useState<Record<Slot, string[]>>({
    one: [],
    two: [
      "https://media.soundoflife.com/34/resources/nYTMvz2A7V6j2KD1qrFqLRvDgXqwkgNBVM9s0HRS.jpg",
    ],
    three: [
      "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:896,cw:2304,ch:2304,q:80,w:2304/H8R79odorHBXmDLQw9kzUk.jpg",
      "https://wildjolie.com/cdn/shop/articles/16_Most_Beautiful_Horse_in_the_World.jpg?v=1740021416",
      "https://equusmagazine.com/wp-content/uploads/migrations/equus/horse-galloping-on-sand.jpg",
    ],
  });

  const handlePrev = () => {
    startTransition(() => {
      setStacks((curr) => {
        if (curr.two.length === 0) return curr;
        const lastTwo = curr.two[curr.two.length - 1];
        const lastThree = curr.three[curr.three.length - 1]!;
        return {
          one: [...curr.one, lastTwo],
          two: [lastThree],
          three: curr.three.slice(0, -1),
        };
      });
    });
  };

  return (
    <>
      <div className="carousel">
        {stacks.one.map((url) => (
          <ViewTransition name={`img-${url.slice(-6)}`} key={url}>
            <img src={url} className={`stack-image one`} />
          </ViewTransition>
        ))}
        {stacks.two.map((url) => (
          <ViewTransition name={`img-${url.slice(-6)}`} key={url}>
            <img src={url} className={`stack-image two`} />
          </ViewTransition>
        ))}
        {stacks.three.map((url) => (
          <ViewTransition name={`img-${url.slice(-6)}`} key={url}>
            <img src={url} className={`stack-image three`} />
          </ViewTransition>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
    </>
  );
}

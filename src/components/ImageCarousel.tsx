import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

interface Card {
  id: number;
  color: string
}
type StackType = Card[];

const moveCardForward = (prevStacks: StackType[]) => {
  const [leftStack, centerStack, rightStack] = prevStacks;

  if (leftStack.length === 0 && centerStack.length === 0) {
    return prevStacks;
  }

  const updatedLeft = leftStack.slice(0, -1);

  const updatedCenter =
    leftStack.length > 0 ? leftStack.slice(-1) : [];

  const updatedRight = [...rightStack];
  if (centerStack.length > 0) {
    updatedRight.push(centerStack[0]);
  }

  return [updatedLeft, updatedCenter, updatedRight];
}

const moveCardBackward = (prevStacks: StackType[]) => {
  const [leftStack, centerStack, rightStack] = prevStacks;

  if (centerStack.length === 0 && rightStack.length === 0) {
    return prevStacks;
  }

  const updatedLeft = [...leftStack];
  if (centerStack.length > 0) {
    updatedLeft.push(centerStack[0]);
  }

  const updatedCenter = rightStack.slice(-1);
  const updatedRight = rightStack.slice(0, -1);

  return [updatedLeft, updatedCenter, updatedRight];
}

export default function ImageCarousel() {
  const [stacks, setStacks] = useState<StackType[]>([
    [],
    [],
    [
      { id: 4, color: "royalblue" },
      { id: 3, color: "green" },
      { id: 2, color: "orange" },
      { id: 1, color: "plum" },
    ],
  ]);

  const handleNext = () => {
    startTransition(() => setStacks(moveCardForward));
  };

  const handlePrev = () => {
    startTransition(() => setStacks(moveCardBackward));
  };

  return (
    <>
      <div className="grid gallery">
        {stacks.map((stack, i) => {
          return (
            <Stack stack={stack} stackPosition={i} key={`stack-${i}`}/>
          );
        })}
      </div>

      <div role="group">
        <button className="outline" onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

interface StackProps {
  stack: StackType;
  stackPosition: number
}

function Stack({stack, stackPosition}: StackProps) {
  return (
    <div
      className={stackPosition === 1 ? "center-stack-container" : "side-stack-container"}
    >
      {stack.map((cardObject) => {
        return (
          <ViewTransition name={`name-${cardObject.id}`}>
            <div
              className={stackPosition === 1 ? "center-card" : "side-card"}
              style={{ backgroundColor: cardObject.color }}
            >
              {cardObject.id}
            </div>
          </ViewTransition>
        );
      })}
    </div>
  );
}

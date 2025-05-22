import { useState } from "react";
import Shuffle from "./components/Shuffle";
import ImageCarousel from "./components/ImageCarousel";
import { Pages } from "./types";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [selected, setSelected] = useState<Pages>(Pages.Shuffle);

  const toShow = {
    [Pages.Shuffle]: <Shuffle />,
    [Pages.ImageCarousel]: <ImageCarousel />,
  }[selected];

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: Pages,
  ) => {
    e.preventDefault();
    setSelected(page);
  };

  return (
    <>
      <NavBar onNavigate={handleNavigate} />
      {toShow}
    </>
  );
}

export default App;

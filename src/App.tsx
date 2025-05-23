import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ImageCarousel from "./components/ImageCarousel";
import Shuffle from "./components/Shuffle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shuffle />} />
        <Route path="imagecarousel" element={<ImageCarousel />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ImageCarousel from "./components/ImageCarousel";
import ShuffleExample from "./components/ShuffleExample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShuffleExample />} />
        <Route path="/imagecarousel" element={<ImageCarousel />} />
      </Route>
    </Routes>
  );
}

export default App;

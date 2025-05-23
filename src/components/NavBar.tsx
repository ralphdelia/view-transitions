import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Article</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Shuffle</Link>
          </li>
          <li>
            <Link to="/imagecarousel">Image Carousel</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import { Pages } from "../types";

interface NavBarProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, page: Pages) => void;
}

export default function NavBar({ onNavigate }: NavBarProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Article </a>
          </li>
        </ul>
        <ul>
          {Object.values(Pages).map((page) => (
            <li key={page}>
              <a onClick={(e) => onNavigate(e, page)}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

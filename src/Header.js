import "./Header.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Microsoft from "@iconscout/react-unicons/icons/uil-microsoft";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <div className="header-left">
      <Link className="header-link header-link-bold" to="about-me">
        Owen Flood
      </Link>

      <Link className="header-link" to="projects">
        Projects
      </Link>
    </div>

    <div className="header-right">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="header-link social"
        href="https://github.com/OwenFlood"
      >
        <Github size="100%" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="header-link social"
        href="https://www.linkedin.com/in/owen-flood/"
      >
        <Linkedin size="100%" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="header-link social"
        href="https://marketplace.visualstudio.com/publishers/owen-flood"
      >
        <Microsoft size="100%" />
      </a>
    </div>
  </header>
);

export default Header
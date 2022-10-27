import "./Header.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Microsoft from "@iconscout/react-unicons/icons/uil-microsoft";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <div className="header-left">
      <Link className="header-link" to="about-me">
        About Me
      </Link>

      <Link className="header-link" to="projects">
        My Projects
      </Link>
    </div>

    <div className="header-right">
      <a className="header-link social" href="https://github.com/OwenFlood">
        <Github size="100%" />
      </a>
      <a
        className="header-link social"
        href="https://www.linkedin.com/in/owen-flood/"
      >
        <Linkedin size="100%" />
      </a>
      <a
        className="header-link social"
        href="https://marketplace.visualstudio.com/publishers/owen-flood"
      >
        <Microsoft size="100%" />
      </a>
    </div>
  </header>
);

export default Header
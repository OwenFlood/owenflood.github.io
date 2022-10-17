import "./Header.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Microsoft from "@iconscout/react-unicons/icons/uil-microsoft";

const Header = () => (
  <header className="App-header">
    <div className="header-padding" />

    <div className="header-text">
      <p>Welcome to Owen Flood</p>
    </div>

    <div className="socials">
      <a href="https://github.com/OwenFlood">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/owen-flood/">
        <Linkedin />
      </a>
      <a href="https://marketplace.visualstudio.com/publishers/owen-flood">
        <Microsoft />
      </a>
    </div>
  </header>
);

export default Header
import logo from "../assets/LogoPort.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

// TODO: turn these icons into functional button links

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 md:pt-3" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className="transition-transform transform hover:scale-125"
          href="https://github.com/Arckain-sys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="transition-transform transform hover:scale-125"
          href="https://instagram.com/musa.abel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="transition-transform transform hover:scale-125"
          href="https://linkedin.com/in/abelmusa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

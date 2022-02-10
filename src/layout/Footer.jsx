import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
        <ul className="flex text-xl lg:text-2xl justify-evenly">
          <li className="relative py-2 group">
            <Link to={"/"}>
              <h1>ABOUT ME</h1>
            </Link>
            <span className="after:absolute after:bg-blue-500 after:h-1 after:left-1/2 after:right-1/2 after:bottom-0 group-hover:after:left-0 group-hover:after:right-0 after:duration-150 group-hover:after:ease-in"></span>
          </li>
          <li className="relative py-2 group">
            <Link to={"/portofolio"}>
              <h1>PORTOFOLIO</h1>
            </Link>
            <span className="after:absolute after:bg-blue-500 after:h-1 after:left-1/2 after:right-1/2 after:bottom-0 group-hover:after:left-0 group-hover:after:right-0 after:duration-150 group-hover:after:ease-in"></span>
          </li>
          <li className="relative py-2 group">
            <Link to={"/contact"}>
              <h1>CONTACT</h1>
            </Link>
            <span className="after:absolute after:bg-blue-500 after:h-1 after:left-1/2 after:right-1/2 after:bottom-0 group-hover:after:left-0 group-hover:after:right-0 after:duration-150 group-hover:after:ease-in"></span>
          </li>
        </ul>
        <i></i>
    </footer>
  );
};

export default Footer;

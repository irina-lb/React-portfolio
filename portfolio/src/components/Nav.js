import { StyledNav } from "../styles";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <Link className="logo" to="/">
        Portfolio
      </Link>
      <ul>
        <li>
          {" "}
          <Link to="/"> About Me</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/work"> Works </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contacts"> Contacts</Link>{" "}
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;

import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/About">About</Link>
      &nbsp; | &nbsp;
      <Link to="/Gallery">Gallery</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      <br></br>
      <span className="welcome-message">Welcome to the Michi Gallery, {user.name}</span>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  //   console.log(1, user)
  return (
    <nav>
      <Link to="/">
        <span>Home</span>
      </Link>
      {!user && (
        <>
          {" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </>
      )}

      {user && (
        <>
          <Link to="/profile">
            <span>profile</span>
          </Link>
          <div>
            <button onClick={() => logout()}>Log out</button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

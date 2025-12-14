import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Signup</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
 
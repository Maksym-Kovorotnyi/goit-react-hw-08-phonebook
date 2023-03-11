import { Link } from "react-router-dom";



export const AuthForm=()=> {
  return (
    <nav>
      <Link to="/register" >
        Sign up
      </Link>
      <Link to="/login" >
        Log in
      </Link>
    </nav>
  );
}
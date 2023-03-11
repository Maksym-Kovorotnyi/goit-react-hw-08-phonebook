import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {selectIsLoggedIn} from '../../redux/Auth/authSelector'

export const Navigation = () => {
  // const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Link to="/">
        Home
      </Link>
        <Link to="/contacts">
          Phonebook
        </Link>
      </>
   
  );
};

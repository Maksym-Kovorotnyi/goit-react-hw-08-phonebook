
import { AuthForm } from "components/AuthForm/AuthForm"
import {Navigation} from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { Outlet } from "react-router-dom"
import { selectIsLoggedIn } from "redux/Auth/authSelector"

export const Layout = () => {
    return (<>
      <div>
        <Navigation />
            {selectIsLoggedIn ? <AuthForm /> : <UserMenu />}
            <Outlet/>
        </div>
    </>)
}
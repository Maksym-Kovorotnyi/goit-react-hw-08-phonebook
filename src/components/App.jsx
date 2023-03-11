import { ContactsPage } from 'Pages/contactsPage';
import { HomePage } from 'Pages/homePage';
import { RegistrationPage } from 'Pages/registrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/Auth/authThunk';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { LogInForm } from './SignInForm/LogInForm';




export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={<ContactsPage/>}
        />
        <Route
          path="/login"
          element={<LogInForm />}
        />
        <Route
          path="/register"
          element={<RegistrationPage />}
          />
           <Route
            path="/contacts"
            element={
              <ContactsPage/>
            }
          />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
      
  </>)
};







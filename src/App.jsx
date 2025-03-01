import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefresh);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? null : (
        <Routes>
  <Route path="/" element={<Layout><Outlet /></Layout>}>
    <Route index element={<HomePage />} />
    <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
    <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
    <Route path="/register" element={<RestrictedRoute component={RegistrationPage} />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>

    );
}

export default App;
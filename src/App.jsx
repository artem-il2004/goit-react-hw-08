import { Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"; 
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
          <Route path="/register" element={<RestrictedRoute component={RegistrationPage} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
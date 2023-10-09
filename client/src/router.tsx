import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import { AuthProvider } from "./context/authContext";
import Register from "./pages/register/register";
import NotFound from "./pages/notFound/notFound";

const AppRouter: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;

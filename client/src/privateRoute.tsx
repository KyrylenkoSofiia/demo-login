import { useAuth } from "./context/authContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { whoAmI } from "./utils/network";
import { authorizedRequest } from "./utils/queries";
import { useEffect, useState } from "react";
import Loader from "./component/general/loader/loader";

const PrivateRoute = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const token = localStorage.getItem("token");
  const loginUser = async () => {
    setLoading(true);
    try {
      const user = await authorizedRequest(whoAmI, "GET");
      const accessToken = user.accessToken;
      dispatch({ type: "LOGIN", payload: accessToken });
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loginUser();
  }, []);
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <Loader appear={loading}>
      <Outlet />
    </Loader>
  );
};

export default PrivateRoute;

import SubmitButton from "../../component/general/submitButton/submitButton";
import { useAuth } from "../../context/authContext";
const Main = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <h2 className="">Private Page</h2>
      <p>Hi Marcus</p>
      <SubmitButton onClick={handleLogout} text={"Logout"} />
    </div>
  );
};

export default Main;

import { useReducer } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import { loginAPICall } from "../../helpers/authFunctions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserData } from "../../context/userdata-context";
import {
  loginInputReducer,
  initialLoginInputState,
} from "../../reducers/loginInputReducer";

export const Login = () => {
  const navigate = useNavigate();
  const { authStateDispatch } = useAuth();
  const { userDataDispatch } = useUserData();
  const [loginInputState, loginInputStateDispatch] = useReducer(
    loginInputReducer,
    initialLoginInputState
  );
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await loginAPICall(loginInputState);
      authStateDispatch({ type: "LOGIN", payload: data.encodedToken });
      userDataDispatch({ type: "LOGIN", payload: data.foundUser });
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      loginInputStateDispatch({ type: "RESET" });
    }
  };
  return (
    <>
      <main className={styles["login-main"]}>
        <div className={styles["centered-box"]}>
          <h1>Sign In</h1>
          <form onSubmit={submitHandler} className={styles["input-form"]}>
            <div className={styles["input-control"]}>
              <label>Email</label>
              <input
                type="email"
                required
                value={loginInputState.email}
                autoComplete="username"
                onChange={(e) =>
                  loginInputStateDispatch({
                    type: "EMAIL",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Password</label>
              <input
                type="password"
                required
                value={loginInputState.password}
                autoComplete="current-password"
                onChange={(e) =>
                  loginInputStateDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <button className={styles["form-btn"]}>Sign In</button>
          </form>
          <div className={styles["other-links"]}>
            <Link to="/register">First time? Register Here</Link>
          </div>
        </div>
      </main>
    </>
  );
};

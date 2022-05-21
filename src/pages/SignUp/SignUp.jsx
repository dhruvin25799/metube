import { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { registerAPICall } from "../../helpers/authFunctions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Login/Login.module.css";
import {
  registerInputReducer,
  initialRegisterInputState,
} from "../../reducers/registerInputReducer";
import { useUserData } from "../../context/userdata-context";

export const SignUp = () => {
  const navigate = useNavigate();
  const { authStateDispatch } = useAuth();
  const { userDataDispatch } = useUserData();
  const [registerInputState, registerInputStateDispatch] = useReducer(
    registerInputReducer,
    initialRegisterInputState
  );
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await registerAPICall(registerInputState);
      authStateDispatch({ type: "LOGIN", payload: data.encodedToken });
      userDataDispatch({ type: "LOGIN", payload: data.createdUser });
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
      registerInputStateDispatch({ type: "RESET" });
    }
  };
  return (
    <>
      <main className={styles["login-main"]}>
        <div className={styles["centered-box"]}>
          <h1>Sign Up</h1>
          <form onSubmit={submitHandler} className={styles["input-form"]}>
            <div className={styles["input-control"]}>
              <label>First Name</label>
              <input
                type="text"
                required
                value={registerInputState.fName}
                onChange={(e) =>
                  registerInputStateDispatch({
                    type: "FNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Last Name</label>
              <input
                type="text"
                required
                value={registerInputState.lName}
                onChange={(e) =>
                  registerInputStateDispatch({
                    type: "LNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Email</label>
              <input
                type="email"
                required
                value={registerInputState.email}
                autoComplete="username"
                onChange={(e) =>
                  registerInputStateDispatch({
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
                value={registerInputState.password}
                autoComplete="new-password"
                onChange={(e) =>
                  registerInputStateDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <button className={styles["form-btn"]}>Sign Up</button>
          </form>
          <div className={styles["other-links"]}>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </main>
    </>
  );
};

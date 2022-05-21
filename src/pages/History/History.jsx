import styles from "./History.module.css";
import { Button } from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../context/userdata-context";
import { Thumbnail } from "../../components/UI/Thumbnail/Thumbnail";
import { removeAllHistory } from "../../helpers/deleteData";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";

export const History = () => {
  const { authState } = useAuth();
  const { userData, userDataDispatch } = useUserData();
  const removeHistoryHandler = async () => {
    try {
      const data = await removeAllHistory({ token: authState.token });
      userDataDispatch({ type: "HISTORY", payload: data.history });
      toast.success("All history deleted", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
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
    }
  };
  return (
    <>
      <main className={styles["history-main"]}>
        <div className={styles["history-container"]}>
          <div className={styles["history-header"]}>
            <h1>Watch History</h1>
            {userData.history.length > 0 && (
              <Button onClick={removeHistoryHandler}>
                <FontAwesomeIcon icon={faBan} />
                Clear History
              </Button>
            )}
          </div>
          <div className={styles["history-grid"]}>
            {userData.history.length > 0 ? (
              userData.history.map((item) => (
                <Thumbnail data={item} key={item._id} />
              ))
            ) : (
              <p>Your watch history will appear here.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

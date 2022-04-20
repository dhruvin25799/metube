import { Thumbnail } from "../../components/UI/Thumbnail/Thumbnail";
import { useUserData } from "../../context/userdata-context";
import styles from "./MyList.module.css";

export const MyList = () => {
  const { userData } = useUserData();
  return (
    <>
      <main className={styles["list-main"]}>
        <div className={styles["list-container"]}>
          <h1>My List</h1>
          <div className={styles["list-grid"]}>
            {userData.watchlater.map((item) => (
              <Thumbnail data={item} key={item._id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

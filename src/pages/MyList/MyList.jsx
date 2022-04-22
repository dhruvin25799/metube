import { Thumbnail } from "../../components/UI/Thumbnail/Thumbnail";
import { useUserData } from "../../context/userdata-context";
import styles from "./MyList.module.css";

export const MyList = () => {
  const { userData } = useUserData();
  return (
    <>
      <main className={styles["list-main"]}>
        <div className={styles["list-container"]}>
          <section>
            <h1>My List</h1>
            {userData.watchlater.length > 0 ? (
              <div className={styles["list-grid"]}>
                {userData.watchlater.map((item) => (
                  <Thumbnail data={item} key={item._id} />
                ))}
              </div>
            ) : (
              <div className={styles["error-text"]}>
                Add something to your list to get it displayed here
              </div>
            )}
          </section>
          <section>
            <h1>Liked Videos</h1>
            {userData.likes.length > 0 ? (
              <div className={styles["list-grid"]}>
                {userData.likes.map((item) => (
                  <Thumbnail data={item} key={item._id} />
                ))}
              </div>
            ) : (
              <div className={styles["error-text"]}>
                Like something to get it displayed here
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

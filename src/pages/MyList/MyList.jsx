import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Thumbnail } from "../../components/UI/Thumbnail/Thumbnail";
import { useUserData } from "../../context/userdata-context";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/UI/Button/Button";
import styles from "./MyList.module.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { createPlaylist } from "../../helpers/postData";
import { toast } from "react-toastify";
import { CustomPlaylist } from "../../components/UI/CustomPlaylist/CustomPlaylist";

export const MyList = () => {
  const { userData, userDataDispatch } = useUserData();
  const { authState } = useAuth();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (playlistInput.length !== 0) {
      try {
        const data = await createPlaylist({
          title: playlistInput,
          token: authState.token,
        });
        userDataDispatch({ type: "PLAYLIST", payload: data.playlists });
        toast.success("Playlist Created", {
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
    }
    setIsFormOpen(false);
    setPlaylistInput("");
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [playlistInput, setPlaylistInput] = useState("");
  return (
    <>
      <main className={styles["list-main"]}>
        <div className={styles["list-container"]}>
          <section className={styles["list-form-container"]}>
            <div className={styles["form-header"]}>
              <h1>Create List</h1>
              <Button primary={true} onClick={() => setIsFormOpen(!isFormOpen)}>
                <FontAwesomeIcon icon={isFormOpen ? faMinus : faPlus} />
              </Button>
            </div>
            {isFormOpen && (
              <form onSubmit={formSubmitHandler}>
                <div className={styles["input-control"]}>
                  <label>Playlist Name : </label>
                  <input
                    type="text"
                    value={playlistInput}
                    onChange={(e) => setPlaylistInput(e.target.value)}
                  />
                </div>
                <Button primary={true}>Submit</Button>
              </form>
            )}
          </section>
          {userData.playlists.map((playlist) => (
            <CustomPlaylist playlist={playlist} key={playlist._id} />
          ))}
          <section>
            <h1>Watch Later</h1>
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

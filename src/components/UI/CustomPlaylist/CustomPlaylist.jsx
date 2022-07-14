import { Thumbnail } from "../Thumbnail/Thumbnail";
import styles from "./CustomPlaylist.module.css";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deletePlaylist,
  deleteVideoFromPlaylist,
} from "../../../helpers/deleteData";
import { useAuth } from "../../../context/auth-context";
import { useUserData } from "../../../context/userdata-context";
import { toast } from "react-toastify";

export const CustomPlaylist = (props) => {
  const { playlist } = props;
  const { authState } = useAuth();
  const { userDataDispatch } = useUserData();
  const deletePlaylistHandler = async () => {
    try {
      const data = await deletePlaylist({
        playlistId: playlist._id,
        token: authState.token,
      });
      userDataDispatch({ type: "PLAYLIST", payload: data.playlists });
      toast.success("Playlist Deleted", {
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
  const deleteVideoHandler = async (videoData) => {
    try {
      const data = await deleteVideoFromPlaylist({
        playlistId: playlist._id,
        token: authState.token,
        videoId: videoData._id,
      });
      userDataDispatch({ type: "PLAYLIST_REPLACE", payload: data.playlist });
      toast.success("Video Deleted from Playlist", {
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
      <section>
        <div className={styles["custom-playlist-header"]}>
          <h1>{playlist.title}</h1>
          <Button onClick={deletePlaylistHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
        {playlist.videos.length > 0 ? (
          <div className={styles["list-grid"]}>
            {playlist.videos.map((item) => (
              <Thumbnail
                data={item}
                key={item._id}
                onDelete={deleteVideoHandler}
              />
            ))}
          </div>
        ) : (
          <div className={styles["error-text"]}>
            Add something to your this playlist to get it displayed here
          </div>
        )}
      </section>
    </>
  );
};

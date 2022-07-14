import styles from "./AddToCustomPlaylist.module.css";
import { Button } from "../Button/Button";
import { useUserData } from "../../../context/userdata-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useModal } from "../../../context/modal-context";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/auth-context";
import { addVideoToPlaylist } from "../../../helpers/postData";

export const AddToCustomPlaylist = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { userData, userDataDispatch } = useUserData();
  const [dropdownState, setdropDownState] = useState(
    userData.playlists.length === 0 ? "" : userData.playlists[0]._id
  );
  const { modalState } = useModal();
  const { authState } = useAuth();
  const addVideoToPlaylistHandler = async () => {
    try {
      const data = await addVideoToPlaylist({
        playlistId: dropdownState,
        token: authState.token,
        data: modalState.data,
      });
      userDataDispatch({ type: "PLAYLIST_REPLACE", payload: data.playlist });
      toast.success("Video added to playlist", {
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
      <div className={styles["add-to-custom-div"]}>
        <Button onClick={() => setOpenDropdown(true)}>
          Add to custom playlist
        </Button>
        {openDropdown && (
          <>
            <select
              onChange={(e) => setdropDownState(e.target.value)}
              value={dropdownState}
            >
              {userData.playlists.map((playlist) => (
                <option value={playlist._id} key={playlist._id}>
                  {playlist.title}
                </option>
              ))}
            </select>
            <Button
              primary={true}
              onClick={addVideoToPlaylistHandler}
              disabled={userData.playlists.length === 0}
            >
              Add Video to selected playlist
            </Button>
            <Button onClick={() => setOpenDropdown(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </>
        )}
      </div>
    </>
  );
};

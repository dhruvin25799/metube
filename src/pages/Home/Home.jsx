import { useEffect, useState } from "react";
import { Banner } from "../../components/UI/Banner/Banner";
import { Carousel } from "../../components/UI/Carousel/Carousel";
import { getMovieData } from "../../helpers/getData";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner/LoadingSpinner";
import styles from "./Home.module.css";
import { useUserData } from "../../context/userdata-context";

export const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [bannerData, setBannerData] = useState(false);
  const { userData } = useUserData();
  useEffect(() => {
    (async () => {
      const { data, randomMovie } = await getMovieData();
      setMovieData(data);
      setBannerData(randomMovie);
      setIsLoading(false);
      console.log(data);
    })();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <main className={styles["home"]}>
        {isLoading && (
          <div className={styles["loading-container"]}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && <Banner data={bannerData} />}
        {!isLoading && userData.watchlater.length > 0 && (
          <Carousel data={{ title: "My List", movies: userData.watchlater }} />
        )}
        {!isLoading && userData.history.length > 0 && (<Carousel data={{title: "Watch Again", movies: userData.history}}/>)}
        {!isLoading &&
          movieData.map((category) => (
            <Carousel key={category.title} data={category} />
          ))}
      </main>
    </>
  );
};

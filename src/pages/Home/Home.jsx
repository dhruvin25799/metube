import { useEffect, useState } from "react";
import { Banner } from "../../components/UI/Banner/Banner";
import { Carousel } from "../../components/UI/Carousel/Carousel";
import { getMovieData } from "../../helpers/getData";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner/LoadingSpinner";
import styles from "./Home.module.css";

export const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [bannerData, setBannerData] = useState(false);
  useEffect(() => {
    (async () => {
      const { data, randomMovie } = await getMovieData();
      setMovieData(data);
      setBannerData(randomMovie);
      setIsLoading(false);
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
        {!isLoading &&
          movieData.map((category) => (
            <Carousel key={category.title} data={category} />
          ))}
      </main>
    </>
  );
};

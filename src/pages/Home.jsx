import { useEffect, useState } from "react";
import { Banner } from "../components/UI/Banner/Banner";
import { Carousel } from "../components/UI/Carousel/Carousel";
import styles from "./Home.module.css";
const fetchMovies = async () => {
  const res = await fetch("/api/videos/");
  const data = await res.json();
  return data;
};
const fetchCategories = async () => {
  const res = await fetch("/api/categories/");
  const data = await res.json();
  return data;
};

export const Home = () => {
  useEffect(() => {
    (async () => {
      const movieData = await fetchMovies();
      const categoryData = await fetchCategories();
      const data = categoryData.categories.map((item) => {
        return {
          title: item.categoryName,
          movies: [
            ...movieData.videos.filter(
              (movie) => movie.category === item.categoryName
            ),
          ],
        };
      });
      setMovieData(data);
      const random = Math.floor(Math.random()*10);
      setBannerData(movieData.videos[random])
    })();
  }, []);
  const [movieData, setMovieData] = useState([]);
  const [bannerData, setBannerData] = useState(false);

  return (
    <>
      <main className={styles["home"]}>
        {bannerData && <Banner data={bannerData}/>}
        {movieData.map((category) => (
          <Carousel key={category.title} data={category} />
        ))}
      </main>
    </>
  );
};

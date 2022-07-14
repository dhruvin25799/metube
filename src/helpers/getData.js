import axios from "axios";
const getVideos = async () => {
  const res = await axios.get("/api/videos/");
  return res.data;
};

const getCategories = async () => {
  const res = await axios.get("/api/categories/");
  return res.data;
};

export const getMovieData = async () => {
  const movieData = await getVideos();
  const categoryData = await getCategories();
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
  const random = Math.floor(Math.random() * 10);
  const randomMovie = movieData.videos[random];
  return { data, randomMovie };
};

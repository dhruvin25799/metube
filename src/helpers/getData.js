const getVideos = async () => {
  const res = await fetch("/api/videos/");
  const data = await res.json();
  return data;
};

const getCategories = async () => {
  const res = await fetch("/api/categories/");
  const data = await res.json();
  return data;
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

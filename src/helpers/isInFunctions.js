export const isInList = (list, item) => {
  return list.some((video) => video.id === item.id);
};

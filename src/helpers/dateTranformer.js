export const dateTransformer = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

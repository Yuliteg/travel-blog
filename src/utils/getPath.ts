export const getPath = (path: string) => {
  const isDev = process.env.NODE_ENV === "development";

  return isDev ? `/site${path}` : `${path}`;
};

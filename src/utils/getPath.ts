import { BASE_PATH } from "@/lib/constants";

export const getPath = (path: string) => {
  const isDev = process.env.NODE_ENV === "development";
  const isBuild = typeof window === "undefined";

  return isDev || isBuild ? `${BASE_PATH}${path}` : path;
};

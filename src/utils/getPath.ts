import { BASE_PATH } from "@/lib/constant";

export const getPath = (path: string, base: string = BASE_PATH) => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? `${base}${path}` : path;
};

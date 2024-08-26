import { FC } from "react";

interface Props {
  test?: any;
}

export const Footer: FC<Props> = () => {
  return (
    <footer className="p-4 text-center">
      <h2 className="text-sm text-gray-600">Footer</h2>
    </footer>
  );
};

import { FC } from "react";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Icon: FC<Props> = ({ src, alt, width = 40, height = 40 }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

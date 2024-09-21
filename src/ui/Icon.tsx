import { FC } from "react";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Icon: FC<Props> = ({
  src,
  alt,
  width = 40,
  height = 40,
  priority
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

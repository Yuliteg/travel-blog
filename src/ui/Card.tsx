import Image from "next/image";

import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${image}`;

  return (
    <div className="flex flex-col justify-between rounded-lg bg-white shadow-md">
      <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          loading="lazy"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="overflow-hidden p-4">
        <h3
          title={title}
          className="font-montserrat mb-2 truncate text-xl font-bold"
        >
          {title}
        </h3>
        <p className="line-clamp-3 min-h-14 text-sm leading-tight text-gray-700">
          {description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <Button variant="outlined" size="sm" bgColor="transparent">
            View Place
          </Button>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  prepTime: string;
  serves: string;
  badge?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  prepTime,
  serves
}) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-white shadow-md">
      <div className="relative h-60 w-full overflow-hidden rounded-t-lg object-cover">
        <Image
          src={"/recipe/hero.webp"}
          alt={title}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
        <div className="card-footer mt-2 flex items-center justify-between">
          <span>
            {prepTime} - {serves}
          </span>
          <button className="mt-4 rounded-full bg-orange-400 px-4 py-2 text-white hover:bg-orange-500">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

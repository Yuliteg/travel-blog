interface SectionTitleProps {
  title: string;
  fontSize?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  fontSize = "2xl"
}) => {
  return <h2 className={`text-${fontSize} font-bold`}>{title}</h2>;
};

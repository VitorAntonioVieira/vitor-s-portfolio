type SectionProps = {
  children: React.ReactNode;
  className: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className={`flex ${className} w-container h-full`}>{children}</div>
  );
};

export default Section;

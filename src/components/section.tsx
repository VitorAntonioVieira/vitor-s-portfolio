type SectionProps = {
  children: React.ReactNode;
  className: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`snap-start flex ${className} w-container h-full`}>
      {children}
    </section>
  );
};

export default Section;

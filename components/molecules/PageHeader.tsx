import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";

interface PageHeaderProps {
  label: string;
  title: string;
  gradientText: string;
  statement?: string;
}

export const PageHeader = ({ label, title, gradientText, statement }: PageHeaderProps) => {
  return (
    <section className="relative md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-4">
          <SectionHeader
            label={label}
            title={title}
            gradientText={gradientText}
          />
          {statement && <Statement text={statement} />}
        </div>
      </div>
    </section>
  );
};
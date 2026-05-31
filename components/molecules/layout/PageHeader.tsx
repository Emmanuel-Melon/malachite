import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";

interface PageHeaderProps {
  label: string;
  title: string;
  gradientText: string;
  statement?: string;
}

export const PageHeader = ({ label, title, gradientText, statement }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden md:pb-24">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl space-y-4">
          <SectionHeader label={label} title={title} gradientText={gradientText} />
          {statement && <Statement text={statement} />}
        </div>
      </div>
    </section>
  );
};

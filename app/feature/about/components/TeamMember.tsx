import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import type { TeamMember } from "../about.types";

interface TeamMemberProps {
  member: TeamMember;
}

export const TeamMemberItem = ({ member }: TeamMemberProps) => (
  <div className="group relative aspect-[3/4] w-full">
    <ImageContainer className="h-full w-full transition-all duration-500">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="from-primary/60 via-primary/20 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-8">
        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <p className="mb-2 text-[10px] tracking-[.5em] text-white/90">{member.role}</p>
          <h3 className="text-2xl leading-tight font-semibold tracking-tighter text-white">
            {member.name}
          </h3>
          <div className="mt-3 h-1 w-8 origin-left scale-x-0 rounded-full bg-white transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      </div>
    </ImageContainer>
  </div>
);

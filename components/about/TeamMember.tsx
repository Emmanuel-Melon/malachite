import React from 'react';
import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember = ({ name, role, image }: TeamMemberProps) => (
  <div className="group relative aspect-[3/4] w-full">
    <ImageContainer className="w-full h-full transition-all duration-500">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[10px] tracking-[.5em] text-white/90 uppercase font-bold mb-2">
            {role}
          </p>
          <h3 className="text-2xl tracking-tighter text-white font-semibold leading-tight">
            {name}
          </h3>
          <div className="h-1 w-8 bg-white mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </ImageContainer>
  </div>
);
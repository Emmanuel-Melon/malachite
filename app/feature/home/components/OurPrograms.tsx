import { getHomePrograms } from "../data";
import { ProgramsContent } from "./ProgramsContent";

export const OurPrograms = async () => {
  const programs = await getHomePrograms();

  return <ProgramsContent programs={programs} />;
};

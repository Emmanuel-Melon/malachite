import { getFocusAreas } from "../data";
import { ApproachContent } from "./ApproachContent";

export const MentalHealthApproach = async () => {
  const focusAreas = await getFocusAreas();

  return <ApproachContent focusAreas={focusAreas} />;
};

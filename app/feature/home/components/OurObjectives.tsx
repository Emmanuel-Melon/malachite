import { getObjectives } from "../data";
import { ObjectivesContent } from "./ObjectivesContent";

export const OurObjectives = async () => {
  const objectives = await getObjectives();

  return <ObjectivesContent objectives={objectives} />;
};

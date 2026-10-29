import { getCoreValues } from "../data";
import { ValuesContent } from "./ValuesContent";

export const ValuesSection = async () => {
  const valuesData = await getCoreValues();

  return <ValuesContent valuesData={valuesData} />;
};

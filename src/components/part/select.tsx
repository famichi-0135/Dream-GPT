// "use server";
import { selectAllGoals } from "@/lib/query";
import { SelectUiParts } from "./selectParts";

export async function SelectUI() {
  const data = await selectAllGoals();
  // console.log(data);

  return <SelectUiParts data={data || []} />;
}

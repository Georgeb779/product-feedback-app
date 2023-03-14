import { ProductFeedback, Status } from "@/interfaces";

export const countStatus = (
  data: ProductFeedback[]
): Record<Status, number> => {

  const statuses: Status[] = ["Planned", "In Progress", "Live"];
  const statusCounts: Record<Status, number> = {
    Planned: 0,
    "In Progress": 0,
    Live: 0
  };

  for (const obj of data) {
    if (statuses.includes(obj.status)) {
      statusCounts[obj.status] += 1;
    }
  }

  const newObj = Object.keys(statuses).map((key: string) => {
    const value: Status = statuses[parseInt(key)];
    const count: number = statusCounts[value];

    return { value, count };
  });

  return newObj as unknown as Record<Status, number>;
};

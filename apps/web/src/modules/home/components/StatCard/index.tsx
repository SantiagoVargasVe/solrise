import React, { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatNumber } from "@/lib/utils";

type StatType = "projects" | "backers" | "success";

interface StatCardProps {
  statType: StatType;
}

const TitleCard: Record<StatType, string> = {
  projects: "Projects Funded",
  backers: "Total Backers",
  success: "Success Rate",
};

// TODO: Fetch BE data to actual stats
const CardStat: Record<StatType, string | number> = {
  projects: 1002302,
  backers: 12312,
  success: "99%",
};

const StatCard: FC<StatCardProps> = ({ statType }) => {
  const cardStat = CardStat[statType];

  return (
    <Card className="w-[150px] rounded">
      <CardHeader className="p-2">
        <CardTitle>{TitleCard[statType]}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {typeof cardStat === "number" ? formatNumber(cardStat) : cardStat}
      </CardContent>
    </Card>
  );
};

export default StatCard;

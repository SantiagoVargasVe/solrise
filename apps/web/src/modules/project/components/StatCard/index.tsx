import React, { FC } from "react";

import { formatNumber } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
}

const StatCard: FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card className="w-[150px] rounded">
      <CardHeader className="p-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {typeof value === "number" ? formatNumber(value) : value}
      </CardContent>
    </Card>
  );
};

export default StatCard;

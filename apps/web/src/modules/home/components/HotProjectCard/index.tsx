import React, { FC } from "react";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HotProjectCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}

const HotProjectCard: FC<HotProjectCardProps> = ({
  title,
  image,
  description,
  id,
}) => {
  return (
    <Link href={`/project/${id}`} className="w-full">
      <Card className="rounded-sm h-[300px] md:h-fit">
        <CardHeader className="p-0 ">
          <img src={image} alt="project image" />
          <CardTitle className="font-medium px-2">{title}</CardTitle>
        </CardHeader>
        <CardDescription className="px-2 mt-2 text-sm leading-3 pb-2">
          {description}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default HotProjectCard;

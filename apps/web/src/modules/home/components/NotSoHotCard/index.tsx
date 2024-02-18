import React, { FC } from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NotSoHotCardProps {
  title: string;
  image: string | undefined;
  id: string;
}

const NotSoHotCard: FC<NotSoHotCardProps> = ({ title, image, id }) => {
  return (
    <Link href={`/project/${id}`} className="w-full">
      <Card className="p-0 rounded h-[180px] md:h-fit">
        <CardHeader className="p-0">
          <img src={image} alt="project" />
        </CardHeader>

        <CardContent className="p-2">
          <CardTitle className="font-medium text-sm leading-3 text-ellipsis">
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NotSoHotCard;

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NotSoHotCard = () => {
  return (
    <Card className="p-0 rounded ">
      <CardHeader className="p-0">
        <img src="https://dummyimage.com/400x400/3b77d9/fff" alt="project" />
      </CardHeader>

      <CardContent className="p-2">
        <CardTitle className="font-medium text-sm leading-3 text-ellipsis">
          Project Acme
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default NotSoHotCard;

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HotProjectCard = () => {
  return (
    <Card className="rounded-sm">
      <CardHeader className="p-0 ">
        <img
          src="https://dummyimage.com/600x400/9808f2/ffffff"
          alt="project image"
        />
        <CardTitle className="font-medium px-2"> Amazing New Project</CardTitle>
      </CardHeader>
      <CardDescription className="px-2 mt-2 text-sm leading-3 pb-2">
        This project is going to be amazing!
      </CardDescription>
    </Card>
  );
};

export default HotProjectCard;

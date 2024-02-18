import React, { FC } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import InfoTabs from "./components/InfoTabs";
import { Separator } from "@/components/ui/separator";
import StatCard from "./components/StatCard";
import { Progress } from "@/components/ui/progress";

import { formatCurrency } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { Prisma, Reward } from "database";

export type StageWithGoals = Prisma.StageGetPayload<{
  include: {
    stage_goals: true;
  };
}>;

const Project: FC<{ params: { identifier: string } }> = async ({ params }) => {
  const projectData = await prisma.project.findUnique({
    where: {
      id: params.identifier,
    },
    include: {
      images: true,
      rewards: true,
      stages: {
        include: {
          stage_goals: true,
        },
      },
    },
  });

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <main className="flex flex-col items-center w-full h-full py-10 gap-y-8 px-2 md:px-32 ">
      <section className="flex flex-col gap-5 w-full">
        <h1 className="text-center font-bold text-2xl w-">
          {projectData?.title}
        </h1>
        <Carousel className=" w-full">
          <CarouselContent>
            {projectData?.images.map((value) => {
              return (
                <CarouselItem className="basis-1/2" key={value.id}>
                  <img src={value.url} alt="project" />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <Separator />

        <div className="flex flex-wrap gap-5  justify-evenly">
          <StatCard title="Backers" value={projectData?.backers as number} />
          <StatCard title="Days to go" value={generateRandomNumber(20, 100)} />

          <Progress
            value={
              (projectData?.funded as number) / (projectData?.amount as number)
            }
          />
          <div className="w-full">
            <p className="text-lg font-bold text-lila-400">
              {formatCurrency(projectData?.funded as number, true)}
            </p>
            <p>
              raised of {formatCurrency(projectData?.amount as number, true)}
              &nbsp; goal
            </p>
          </div>
        </div>

        <Button className="bg-lila-500  hover:bg-lila-300 " variant="default">
          Fund me
        </Button>
        <p className="text-center text-sm font-light leading-4 ">
          {projectData?.description}
        </p>
      </section>

      <section className="w-full">
        <InfoTabs
          stages={projectData?.stages as StageWithGoals[]}
          rewards={projectData?.rewards as Reward[]}
        />
      </section>
    </main>
  );
};

export default Project;

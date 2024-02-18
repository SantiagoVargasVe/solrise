import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import { formatCurrency } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import InfoTabs from "./components/InfoTabs";
import { Separator } from "@/components/ui/separator";
import StatCard from "./components/StatCard";
import { Progress } from "@/components/ui/progress";

const Project = () => {
  const images = [1, 2, 3, 4, 5, 6];

  const stages = [1, 2, 3, 4];

  return (
    <main className="flex flex-col px-2 py-10 w-full gap-10">
      <section className="flex flex-col gap-5 w-full">
        <h1 className="text-center font-bold text-2xl"> Amazing Project</h1>
        <Carousel>
          <CarouselContent>
            {images.map((value) => {
              return (
                <CarouselItem key={value}>
                  <img
                    src={`https://dummyimage.com/600x400/9808f2/ffffff&text=Project+${value}`}
                    alt="project"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <Separator />

        <div className="flex flex-wrap gap-5 basis-1/2 justify-evenly">
          <StatCard title="Backers" value={342} />
          <StatCard title="Days to go" value={20} />

          <Progress value={50} />
          <div className="w-full">
            <p className="text-lg font-bold text-lila-400">
              {formatCurrency(213232, true)}
            </p>
            <p>raised of {formatCurrency(500000, true)} goal</p>
          </div>
        </div>

        <Separator />

        <Button className="bg-lila-500 " variant="default">
          Fund me
        </Button>

        <p className="text-center text-sm font-light leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          ultrices enim. Sed condimentum tempus est. Sed hendrerit at tellus sit
          amet sollicitudin. Nullam ac consectetur nunc. Etiam facilisis elit ut
          justo ornare lobortis. Maecenas placerat tellus eget efficitur semper.
          Curabitur lacus elit, varius a mi vitae, dictum scelerisque mauris.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mi
          convallis, dignissim arcu a, finibus risus.
        </p>
      </section>

      <section>
        <InfoTabs stages={stages} rewards={[1, 2, 3, 4, 5]} />
      </section>
    </main>
  );
};

export default Project;

import React from "react";

import prisma from "@/lib/prisma";

import StatCard from "./components/StatCard";
import HotProjectCard from "./components/HotProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import NotSoHotCard from "./components/NotSoHotCard";

const HomePage = async () => {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
    },
  });

  return (
    <main className="flex flex-col items-center w-full h-full py-10 gap-y-8 px-2 md:px-32">
      <section className="flex flex-col items-center w-full py-4">
        <h1 className="text-2xl font-bold hidden">Solrise</h1>
        <img src="/assets/solrise-logo-2.png" />
        <i className="text-base font-semibold text-lila-300 ">
          Your project will not stay a Figma!
        </i>
      </section>

      <section className="flex flex-wrap gap-3 justify-center">
        <StatCard statType="projects" />
        <StatCard statType="backers" />
        <StatCard statType="success" />
      </section>

      <section className="flex flex-col gap-y-5 w-full">
        <h3 className="font-bold text-xl text-center">Hot Projects</h3>

        <Carousel className="">
          <CarouselContent>
            {projects.slice(0, 3).map((value) => {
              return (
                <CarouselItem className="basis-1/2" key={value.id}>
                  <HotProjectCard
                    id={value.id}
                    title={value.title}
                    description={value.description}
                    image={value.cover_image}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="w-full flex flex-col  gap-y-3">
        <h4 className="font-semibold text-lg">Close to funding</h4>
        <Carousel>
          <CarouselContent>
            {projects.map((value) => {
              return (
                <CarouselItem className="basis-1/3" key={value.id}>
                  <NotSoHotCard
                    id={value.id}
                    image={value.images[2]?.url}
                    title={value.title}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="w-full flex flex-col  gap-y-3">
        <h4 className="font-semibold text-lg">Recently Added</h4>
        <Carousel>
          <CarouselContent>
            {projects.reverse().map((value) => {
              return (
                <CarouselItem className="basis-1/3" key={value.id}>
                  <NotSoHotCard
                    id={value.id}
                    image={value.images[3]?.url}
                    title={value.title}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
};

export default HomePage;
